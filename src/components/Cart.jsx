import React, { useRef } from "react";
import toast from "react-hot-toast";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useStateContext } from "../StateContext";

const Cart = () => {
	const cartRef = useRef();
	const {
		totalPrice,
		quantity,
		totalQuantities,
		cartItems,
		showCart,
		setShowCart,
		increment,
		decrement,
	} = useStateContext();

	return (
		<div className="cart-wrapper" ref={cartRef}>
			<div className="cart-container">
				<button
					type="button"
					className="cart-heading"
					onClick={() => {
						if (!showCart) {
							setShowCart(true);
						} else {
							setShowCart(false);
						}
					}}>
					<AiOutlineLeft className="font-bold text-2xl" />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">({totalQuantities} items)</span>
				</button>

				<div className="columns-1 flex justify-center">
					{cartItems.length < 1 && (
						<div className="empty-cart">
							<IoMdCart size={200} />
							<h3 className="">Your Shopping cart is empty</h3>
							<Link to="/products/shop">
								<button
									type="button"
									onClick={() => setShowCart(false)}
									className="btn">
									Continue Shopping
								</button>
							</Link>
						</div>
					)}

					<div className="product-container">
						{cartItems.length >= 1 &&
							cartItems.map((item) => (
								<div className="product" key={item.id}>
									<img src={item.imageUrl} className="cart-product-image" />
									<div className="">
										<div className="flex top">
											<h5 className="pr-16">{item.name}</h5>
											<h4>{item.price} UGX</h4>
										</div>
										{/* add and reduce quantity buttons */}
										<div className="flex bottom pt-10">
											<div className="flex w-full">
												<button
													onClick={decrement}
													className="group py-4 px-4 border border-yellow-400 rounded-l-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">
													<svg
														className="stroke-gray-900 group-hover:stroke-black"
														width="22"
														height="22"
														viewBox="0 0 22 22"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M16.5 11H5.5"
															stroke=""
															strokeWidth="1.6"
															strokeLinecap="round"
														/>
														<path
															d="M16.5 11H5.5"
															stroke=""
															strokeOpacity="0.2"
															strokeWidth="1.6"
															strokeLinecap="round"
														/>
														<path
															d="M16.5 11H5.5"
															stroke=""
															strokeOpacity="0.2"
															strokeWidth="1.6"
															strokeLinecap="round"
														/>
													</svg>
												</button>
												<p
													type="text"
													className="font-semibold text-yellow-500 cursor-pointer text-lg py-[13px] px-4 sm:max-w-[118px] outline-0 border-y border-yellow-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-yellow-400">
													{quantity}
												</p>
												<button
													onClick={increment}
													className="group py-4 px-4 border border-yellow-400 rounded-r-full bg-white transition-all duration-300 hover:bg-yellow-50 hover:shadow-sm hover:shadow-yellow-500">
													<svg
														className="stroke-gray-900 group-hover:stroke-black"
														width="22"
														height="22"
														viewBox="0 0 22 22"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M11 5.5V16.5M16.5 11H5.5"
															stroke="#9CA3AF"
															strokeWidth="1.6"
															strokeLinecap="round"
														/>
														<path
															d="M11 5.5V16.5M16.5 11H5.5"
															stroke="black"
															strokeOpacity="0.2"
															strokeWidth="1.6"
															strokeLinecap="round"
														/>
														<path
															d="M11 5.5V16.5M16.5 11H5.5"
															stroke="black"
															strokeOpacity="0.2"
															strokeWidth="1.6"
															strokeLinecap="round"
														/>
													</svg>
												</button>
											</div>
											<button className="remove-item" ><TiDeleteOutline className="size-10" /></button>
										</div>
									</div>
								</div>
							))}
					</div>

					{
						cartItems.length >= 1 && (
							<div className="cart-bottom">
								<div className="total">
									<h3>Subtotal: </h3>
									<h3>${totalPrice}</h3>
								</div>
							</div>
						)
					}
					
				</div>
			</div>
		</div>
	);
};

export default Cart;
