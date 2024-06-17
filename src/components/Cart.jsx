import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Assuming you have jwtDecode available for decoding JWT tokens
import { useStateContext } from "../StateContext";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../stores/cart";

const Cart = () => {
	const { showCart, setShowCart } = useStateContext();

	const [cartItems, setCartItems] = useState([])//remove

	const [totalPrice, setTotalPrice] = useState(0);
	const [orderId, setOrderId] = useState(null);//remove
    const [ownerId, setOwnerId] = useState(null)//remove
	const [error, setError] = useState(null);

	const isLogged = localStorage.getItem("token");
	const carts = useSelector(store => store.cart.items);
	const dispatch = useDispatch();

	useEffect(() => {

        const userId = isLogged ? jwtDecode(isLogged).userid : null;
        setOwnerId(userId)

		const fetchCartItems = async (userId) => {
			if (!userId) return;

			try {
				const response = await fetch(
					`https://petco.onrender.com/api/v1/orders/get-users-order/${userId}`
				);
				const data = await response.json();

				if (data.orders && Array.isArray(data.orders)) {
					const incompleteOrder = data.orders.find(
						(order) => !order.isComplete
					);
					if (incompleteOrder) {
						setCartItems(incompleteOrder.products);
						setOrderId(incompleteOrder.id);
					} else {
						setCartItems([]);
						setTotalPrice(0);
					}
				} else {
					throw new Error("Invalid order data");
				}
			} catch (error) {
				setError(error.message);
			}
		};

		fetchCartItems(userId);
	}, []);

	useEffect(() => {
		calculateTotalPrice(carts);
	}, [carts]);

	const increment = (item) => {
		dispatch(changeQuantity({
			product: item.product,
			quantity: item.quantity + 1
		}))
	};

	const decrement = (item) => {
		dispatch(changeQuantity({
			product: item.product,
			quantity: item.quantity - 1
		}))
	};

	const calculateTotalPrice = (items) => {
		const total = items.reduce(
			(sum, item) => sum + item.product.price * item.quantity,
			0
		);
		setTotalPrice(total);
	};

	const onRemove = (item) => {
		dispatch(
			removeFromCart({
				product: item.product,
				quantity: item.quantity
			})
		)
	};

	const updateOrder = async (items, price, id) => {
		const data = {
			userId: ownerId,
			products: items,
			totalprice: price,
			isComplete: true,
		};

		await fetch(`https://petco.onrender.com/api/v1/orders/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
	};

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className={`cart-wrapper ${showCart ? "visible" : "hidden"}`}>
			<div className="cart-container">
				<button
					type="button"
					className="cart-heading"
					onClick={() => setShowCart(false)}>
					<AiOutlineLeft className="font-bold text-2xl" />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">({carts.length} items)</span>
				</button>

				{carts.length === 0 ? (
					<div className="empty-cart">
						<IoMdCart size={200} />
						<h3>Your Shopping cart is empty</h3>
						<Link to="/products/shop">
							<button
								type="button"
								className="btn"
								onClick={() => setShowCart(false)}>
								Continue Shopping
							</button>
						</Link>
					</div>
				) : (
					<div className="product-container">
						{carts.map((item) => (
							<div className="product" key={item.product.id}>
								<img
									src={item.product.imageUrl}
									className="cart-product-image"
									alt={item.product.name}
								/>
								<div>
									<div className="flex top">
										<h5 className="pr-16">{item.product.name}</h5>
										<h4>{item.product.price} UGX</h4>
									</div>
									<div className="flex bottom pt-10">
										<div className="flex w-full">
											<button
												onClick={() => decrement(item)}
												className="group py-4 px-4 border border-yellow-400 rounded-l-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">
												-
											</button>
											<p
												type="text"
												className="font-semibold text-yellow-500 cursor-pointer text-lg py-[13px] px-4 sm:max-w-[118px] outline-0 border-y border-yellow-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-yellow-400">
												{item.quantity}
											</p>
											<button
												onClick={() => increment(item)}
												className="group py-4 px-4 border border-yellow-400 rounded-r-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">
												+
											</button>
											<button
												className="remove-item"
												onClick={() => onRemove(item)}>
												<TiDeleteOutline className="size-10" />
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{carts.length > 0 && (
					<div className="cart-bottom bg-white">
						<div className="total">
							<h3>Subtotal: {totalPrice} UGX</h3>
						</div>
						<div>
							<Link to="/order">
								<button
									type="button"
									onClick={() => {
										setShowCart(false);
                                        updateOrder(cartItems, totalPrice, orderId);
									}}
									className="btn">
									create order
								</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
