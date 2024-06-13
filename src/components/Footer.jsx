import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (

		<div className="absolute bottom w-full bg-gray-900">
			<div className="max-w-2xl mx-auto text-white py-5 ">
				<div className="text-center">
					<h3 className="text-3xl mb-3"> Download our App </h3>
					<p> We solve all your pet needs </p>
					<div className="flex justify-center my-10">
						<button className="flex items-center border-2 border-yellow-400 w-auto rounded-lg px-4 py-2 mx-2 hover:border-white">
							<img
								src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
								className="w-7 md:w-8"
							/>
							<div className="text-left ml-3">
								<p className="text-xs text-gray-200">Download on </p>
								<p className="text-sm md:text-base"> Google Play Store </p>
							</div>
						</button>
						<div className="flex items-center border-2 border-yellow-400 hover:border-white w-auto rounded-lg px-4 py-2 mx-2">
							<img
								src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
								className="w-7 md:w-8"
							/>
							<div className="text-left ml-3">
								<p className="text-xs text-gray-200">Download on </p>
								<p className="text-sm md:text-base"> Apple Store </p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-center">
					<p className="text-center">&copy; 2024 PetCo All rights reserved</p>
				</div>

				<div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
					<p className="order-2 md:order-1 mt-8 md:mt-0"> Kampala, Uganda </p>
					<div className="order-1 md:order-2">
						<Link to="/about" className="px-2">About us</Link>
						<Link to="#" className="px-2 border-l">Contact us</Link>
						<Link to="#" className="px-2 border-l">Privacy Policy</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
