import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Assuming you have jwtDecode available for decoding JWT tokens

const Cart = () => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderId, setOrderId] = useState(null);
    const [quantity, setQuantity] = useState()
    const [error, setError] = useState(null);

    const isLogged = localStorage.getItem("token");

    useEffect(() => {
        const fetchOrder = async () => {
            const userId = isLogged ? jwtDecode(isLogged).userid : null;
            if (!userId) return;

            try {
                const response = await fetch(`https://petco.onrender.com/api/v1/orders/get-users-order/${userId}`);
                const data = await response.json();
                
                if (data.orders && Array.isArray(data.orders)) {
                    const incompleteOrder = data.orders.find(order => !order.isComplete);
                    if (incompleteOrder) {
                        setOrderId(incompleteOrder.id);
                        fetchOrderItems(incompleteOrder.id);
                    } else {
                        createOrder(userId);
                    }
                } else {
                    throw new Error("Invalid order data");
                }
            } catch (error) {
                setError(error.message);
            }
        };

        const fetchOrderItems = async (orderId) => {
            try {
                const response = await fetch(`https://petco.onrender.com/api/v1/orders/get-order/${orderId}`);
                const orderData = await response.json();
                setCartItems(orderData.order.products);
                calculateTotalPrice(orderData.order.products);
            } catch (error) {
                setError(error.message);
            }
        };

        const createOrder = async (userId) => {
            const data = {
                userId,
                products: [],
                totalprice: 0,
                isComplete: false,
            };

            try {
                const response = await fetch("https://petco.onrender.com/api/v1/orders/createOrder", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error("Failed to create order");
                }

                const newOrder = await response.json();
                setOrderId(newOrder.id);
            } catch (error) {
                setError(error.message);
            }
        };

        const calculateTotalPrice = (items) => {
            const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
            setTotalPrice(total);
        };

        fetchOrder();
    }, [isLogged]);

    const onRemove = (item) => {
        // Handle item removal logic here
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="cart-wrapper">
            <div className="cart-container">
                <button
                    type="button"
                    className="cart-heading"
                    onClick={() => setShowCart(!showCart)}
                >
                    <AiOutlineLeft className="font-bold text-2xl" />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">({cartItems.length} items)</span>
                </button>

                <div className="columns-1 flex justify-center">
                    {cartItems.length < 1 && (
                        <div className="empty-cart">
                            <IoMdCart size={200} />
                            <h3>Your Shopping cart is empty</h3>
                            <Link to="/products/shop">
                                <button type="button" onClick={() => setShowCart(false)} className="btn">
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    )}

                    <div className="product-container">
                        {cartItems.length >= 1 && cartItems.map((item) => (
                            <div className="product" key={item.product.id}>
                                <img src={item.product.imageUrl} className="cart-product-image" alt={item.product.name} />
                                <div className="">
                                    <div className="flex top">
                                        <h5 className="pr-16">{item.product.name}</h5>
                                        <h4>{item.product.price} UGX</h4>
                                    </div>
                                    <div className="flex bottom pt-10">
                                        <div className="flex w-full">
                                            <button
                                                // onClick={() => decrement}
                                                className="group py-4 px-4 border border-yellow-400 rounded-l-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500"
                                            >
                                                -
                                            </button>
                                            <p
                                                type="text"
                                                className="font-semibold text-yellow-500 cursor-pointer text-lg py-[13px] px-4 sm:max-w-[118px] outline-0 border-y border-yellow-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-yellow-400"
                                            >
                                                {item.quantity}
                                            </p>
                                            <button
                                                // onClick={() => increment(item.quantity)}
                                                className="group py-4 px-4 border border-yellow-400 rounded-r-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button className="remove-item" onClick={() => onRemove(item)}>
                                            <TiDeleteOutline className="size-10" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {cartItems.length >= 1 && (
                        <div className="cart-bottom">
                            <div className="total">
                                <h3>Subtotal: {totalPrice} UGX</h3>
                            </div>
                            <div>
                                <Link to="#">
                                    <button
                                        type="button"
                                        onClick={() => setShowCart(false)}
                                        className="btn"
                                    >
                                        create order
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
