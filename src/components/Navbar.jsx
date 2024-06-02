import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../AuthProvider";
import { useStateContext } from "../StateContext";
import Cart from "./Cart";


const Navbar = () => {
	const { logout } = useAuth();
	const { showCart, setShowCart, totalItems } = useStateContext();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const isLogged = localStorage.getItem("token");

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<div>
			<nav className="bg-customYellow max-w-full">
				<div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center">
							<button
								onClick={toggleDrawer}
								className="text-white text-2xl focus:outline-none">
								{isDrawerOpen ? <FaTimes /> : <FaBars />}
							</button>
						</div>
						<div className="flex-1 flex items-center justify-center">
							<Link to="/" className="flex-shrink-0">
								<img src="./src/assets/aqua logo1.png" />
							</Link>
						</div>
						<button type="button" onClick={() => {if(!showCart){setShowCart(true) } else {setShowCart(false)}}} className="items-center pr-2 cart-icon">
							<IoMdCart className="text-white" />
							<span className="cart-item-qty">{totalItems}</span>
						</button>
						{ showCart && <Cart />}
					</div>
				</div>
				{isDrawerOpen && (
					<div
						className="fixed inset-0 bg-gray-800  bg-opacity-75 z-10"
						onClick={toggleDrawer} // Close the drawer when clicking the overlay
					>
						<div
							className="absolute top-[70px] left-0 w-64 h-full bg-white p-4 shadow-md"
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the drawer
						>
							<ul className="space-y-4">
								<li className="text-gray-800 text-lg">
									<Link to="/" onClick={toggleDrawer}>
										Home
									</Link>
								</li>
								<li className="text-gray-800 text-lg">
									<Link to="/posts/blog" onClick={toggleDrawer}>
										Blog
									</Link>
								</li>
								<li className="text-gray-800 text-lg">
									<Link to="/products/shop" onClick={toggleDrawer}>
										Shop
									</Link>
								</li>
								<li className="text-gray-800 text-lg">
									<Link to="/service" onClick={toggleDrawer}>
										Services
									</Link>
								</li>
								<li className="text-gray-800 text-lg">
									<Link to="/wishlist" onClick={toggleDrawer}>
										Wishlist
									</Link>
								</li>
								<li className="text-gray-800 text-lg">
									<Link to="/about" onClick={toggleDrawer}>
										About us
									</Link>
								</li>

								{isLogged ? (
									<li className="text-gray-800 text-lg">
										<button
											onClick={() => {
												logout();
												toggleDrawer();
											}}>
											Logout
										</button>
									</li>
								) : (
									<li className="text-gray-800 text-lg">
										<Link to="/auth/login" onClick={toggleDrawer}>
											Login
										</Link>
									</li>
								)}
							</ul>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
