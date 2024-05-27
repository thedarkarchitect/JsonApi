import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
							<div className="flex-shrink-0">
								<img src="./src/assets/aqua logo1.png" />
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2">
							<FiShoppingCart className="text-white text-2xl" />
						</div>
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
									<Link to="/products" onClick={toggleDrawer}>
										Shop
									</Link>
								</li>
								<li className="text-gray-800 text-lg">
									<Link to="/service" onClick={toggleDrawer}>
										Services
									</Link>
								</li>
								<li className="text-gray-800 text-lg">
									<Link to="#" onClick={toggleDrawer}>
										About us
									</Link>
								</li>
								<li className="text-gray-800 text-lg">
									<Link to="/auth/SignUp" onClick={toggleDrawer}>
										Sign up
									</Link>
								</li>
							</ul>
						</div>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
