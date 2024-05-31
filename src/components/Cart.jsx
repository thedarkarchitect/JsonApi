import React, { useRef } from "react";
import toast from "react-hot-toast";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useStateContext } from "../StateContext";

const Cart = () => {
	const cartRef = useRef();
	const { totalPrice, totalQuantities, cartItems, showCart, setShowCart } =
		useStateContext();

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

          <div>
            {
              cartItems.length >= 1 && cartItems.map((item) => (
                <div className="product" key={item.id}>
                  <img src={item.imageUrl} className="cart-product-image"/>
                </div>
              ))
            }
          </div>

				</div>
			</div>
		</div>
	);
};

export default Cart;
