import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import { useStateContext } from "../StateContext";

const Product = ({ item }) => {
	// const { onAddToCart, cartItems } = useStateContext();
	const [wishList, setWishlist] = useState([]);
	const [ownerId, setOwnerId] = useState(0);

	const isLogged = localStorage.getItem("token");

	const truncateString = (str, maxLength) => {
		if (str.length <= maxLength) {
			return str;
		}
		return str.slice(0, maxLength) + "...";
	};

	useEffect(() => {
		if (isLogged) {
			const userId = jwtDecode(isLogged);
			setOwnerId(userId.userid);

			const fetchWishlist = async () => {
				try {
					const response = await fetch(
						`https://petco.onrender.com/api/v1/wishlist/get-user-wishlist/${userId.userid}`
					);
					const data = await response.json();
					console.log(data);
					setWishlist(data.wishList || []);
				} catch (error) {
					console.log(error);
					// alert("Failed to Fetch Wishlist")
				}
			};

			fetchWishlist();
		}
	}, [isLogged]);

	const addToWishlist = async (productId) => {
		try {
			const wishlistItem = { userId: ownerId, productId };
			const response = await fetch(
				"https://petco.onrender.com/api/v1/wishlist/add-to-wishList",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(wishlistItem), //wishlistItem has ownerId, productId
				}
			);
			if (!response.ok) {
				alert("Already in Wishlist!");
			}
		} catch (error) {
			console.log(error);
			alert("Failed to add to Wishlist");
		}
	};

	const checkWishlistItem = (wishlistItems, wishlistItemId) => {
		return wishlistItems.some((product) => product.id === wishlistItemId);
	};

	return (
		<div className="relative product-card border border-yellow-400 hover:border-yellow-500 rounded-lg w-[150px] h-[250px] shadow-2xl group">
			<Link to={`/products/${item.id}`}>
				<div className="flex justify-center overflow-hidden p-2 h-[170px] relative">
					<img src={item.imageUrl} alt={item.name} className="object-contain" />
					{isLogged ? (
						<div className="absolute bottom-11 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<Link to={`/products/${item.id}`}>
							<button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
								<IoMdCart className="text-customYellow" />
							</button>
							</Link>
							
							<button
								onClick={(e) => {
									e.preventDefault();
									addToWishlist(item.id);
								}}
								className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
								<FaHeart
									className={
										checkWishlistItem(wishList, item.id)
											? "text-red"
											: "text-customYellow"
									}
								/>
							</button>
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className="absolute bottom-0 w-full bg-white bg-opacity-75 p-2 rounded-b-lg">
					<p className="text-md font-semibold overflow-x-hidden truncate">
						{truncateString(item.name, 17)}
					</p>
					<p className="text-md text-black font-extrabold">{item.price} UGX</p>
				</div>
			</Link>
		</div>
	);
};

export default Product;
