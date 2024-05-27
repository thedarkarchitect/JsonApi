import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Product = ({ id, image, price, name }) => {
	const truncateString = (str, maxLength) => {
		if (str.length <= maxLength) {
			return str;
		}
		return str.slice(0, maxLength) + "...";
	};

	return (
		// <div className="product-card border border-yellow-400 hover:border-yellow-[5px] rounded-lg w-[150px] h-[250px] shadow-2xl">
		// 	<Link className="" to={`/products/${id}`}>
		// 		<div className="flex max-h-[170px] justify-center overflow-hidden object-scale-down p-2">
		// 			<img src={image} className="product-image" />

		// 			<div  className="absolute bottom-14 ">
		// 				<button className="p-2 rounded-full shadow-lg">
		// 					<FaShoppingCart className="text-customYellow" />
		// 				</button>
		// 				<button className="p-2 rounded-full shadow-lg ">
		// 					<FaHeart className="text-customYellow" />
		// 				</button>
		// 			</div>
		// 		</div>

		// 		<div className="absolute bottom-0">
		// 			<p className="text-md font-semibold pt-2 ps-2 overflow-x-hidden truncate">
		// 				{truncateString(name, 17)}
		// 			</p>
		// 			<p className="text-md text-black ps-2 pb-2  font-extrabold">
		// 				{price} UGX
		// 			</p>
		// 		</div>
		// 	</Link>
		// </div>
		<div className="relative product-card border border-yellow-400 hover:border-yellow-500 rounded-lg w-[150px] h-[250px] shadow-2xl group">
			<Link to={`/products/${id}`}>
				<div className="flex justify-center overflow-hidden p-2 h-[170px] relative">
					<img src={image} alt={name} className="object-contain" />
					<div className="absolute bottom-11 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
							<FaShoppingCart className="text-customYellow" />
						</button>
						<button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
							<FaHeart className="text-customYellow" />
						</button>
					</div>
				</div>
				<div className="absolute bottom-0 w-full bg-white bg-opacity-75 p-2 rounded-b-lg">
					<p className="text-md font-semibold overflow-x-hidden truncate">
						{truncateString(name, 17)}
					</p>
					<p className="text-md text-black font-extrabold">{price} UGX</p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
