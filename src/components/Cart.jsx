import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Assuming you have jwtDecode available for decoding JWT tokens
import { useStateContext } from "../StateContext";

const Cart = () => {
	const { showCart, setShowCart } = useStateContext();
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [error, setError] = useState(null);

	const isLogged = localStorage.getItem("token");

	useEffect(() => {
		const fetchCartItems = async () => {
			const userId = isLogged ? jwtDecode(isLogged).userid : null;
			if (!userId) return;

			try {
				const response = await fetch(`https://petco.onrender.com/api/v1/orders/get-users-order/${userId}`);
				const data = await response.json();

				if (data.orders && Array.isArray(data.orders)) {
					const incompleteOrder = data.orders.find(order => !order.isComplete);
					if (incompleteOrder) {
						setCartItems(incompleteOrder.products);
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

		fetchCartItems();
	}, []);

	useEffect(() => {
		calculateTotalPrice(cartItems);
	}, [cartItems]);

	const increment = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.product.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const decrement = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.product.id === itemId && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	const calculateTotalPrice = (items) => {
		const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
		setTotalPrice(total);
	};

	const onRemove = (itemId) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== itemId));
	};

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className={`cart-wrapper ${showCart ? 'visible' : 'hidden'}`}>
			<div className="cart-container">
				<button type="button" className="cart-heading" onClick={() => setShowCart(false)}>
					<AiOutlineLeft className="font-bold text-2xl" />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">({cartItems.length} items)</span>
				</button>

				{cartItems.length === 0 ? (
					<div className="empty-cart">
						<IoMdCart size={200} />
						<h3>Your Shopping cart is empty</h3>
						<Link to="/products/shop">
							<button type="button" className="btn" onClick={() => setShowCart(false)}>
								Continue Shopping
							</button>
						</Link>
					</div>
				) : (
					<div className="product-container">
						{cartItems.map((item) => (
							<div className="product" key={item.product.id}>
								<img src={item.product.imageUrl} className="cart-product-image" alt={item.product.name} />
								<div>
									<div className="flex top">
										<h5 className="pr-16">{item.product.name}</h5>
										<h4>{item.product.price} UGX</h4>
									</div>
									<div className="flex bottom pt-10">
										<div className="flex w-full">
											<button onClick={() => decrement(item.product.id)} className="group py-4 px-4 border border-yellow-400 rounded-l-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">-</button>
											<p type="text" className="font-semibold text-yellow-500 cursor-pointer text-lg py-[13px] px-4 sm:max-w-[118px] outline-0 border-y border-yellow-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-yellow-400">{item.quantity}</p>
											<button onClick={() => increment(item.product.id)} className="group py-4 px-4 border border-yellow-400 rounded-r-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">+</button>
											<button className="remove-item" onClick={() => onRemove(item.product.id)}>
												<TiDeleteOutline className="size-10" />
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{cartItems.length > 0 && (
					<div className="cart-bottom">
						<div className="total">
							<h3>Subtotal: {totalPrice} UGX</h3>
						</div>
						<div>
                            <Link to="/order">
                            <button type="button" onClick={() => setShowCart(false)} className="btn">
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
