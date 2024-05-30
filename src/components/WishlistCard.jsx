import { jwtDecode } from "jwt-decode";
import React, { useState, useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const WishlistCard = ({ id, productId, ownerId }) => {
	const [product, setProduct] = useState([]);

    const truncateString = (name, maxLength) => {
		if (!name) { // this solve the type error length not defined
			return "";
		}
		if (name.length <= maxLength) {
			return name;
		}
		return name.slice(0, maxLength) + "...";
	};

	useEffect(() => {
		const fetchProductById = async () => {
			try {
				const response = await fetch(
					`https://petco.onrender.com/api/v1/products/${productId}`
				);
				const data = await response.json();
				console.log(data.product);
				setProduct(data.product || []);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProductById();
	}, [productId]);

    const removeFromWishlist = async (id) => {
		try {
			await fetch(
				`https://petco.onrender.com/api/v1/wishlist/delete-wishlist-item/${id}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					}
				}
			);

            alert("Deleted Successfully")	
            window.location.reload();
		} catch (error) {
			console.log(error);
			alert("Failed to delete to Wishlist");
		}
	};

    if(!product){
        return <div>Loading...</div>
    }

	return (
		<div className="relative product-card border-2 border-yellow-400 hover:border-yellow-500 rounded-lg w-[300px] h-[250px] shadow-2xl group">
			<Link onClick={(e) => { e.preventDefault()}} to={`/products/${productId}`}>
				<div className="flex justify-center overflow-hidden p-2 h-[170px] relative">
					<img
						src={product.imageUrl}
						alt={product.name}
						className="object-contain"
					/>
					<div className="absolute bottom-11 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<button
							onClick={(e) => {
								e.preventDefault();
                                removeFromWishlist(id);
							}}
							className="relative left-[125px] bottom-14 size-10 bg-gray-100 p-2 rounded-full shadow-lg hover:bg-gray-200">
                            <MdDeleteForever className="size-6 text-customYellow " />
						</button>
					</div>
                    <div className="absolute bottom-11 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
							onClick={(e) => {
								e.preventDefault();
							}}
							className="relative left-[125px] bottom-2 size-10 bg-gray-100 p-2 rounded-full shadow-lg hover:bg-gray-200">
                            <IoMdCart className="size-6 text-customYellow " />
						</button>
					</div>
				</div>
				<div className="absolute bottom-0 w-full bg-white bg-opacity-75 p-2 rounded-b-lg">
					<p className="text-md font-semibold overflow-x-hidden truncate">
						{truncateString(product.name, 30)}
					</p>
					<p className="text-md text-black font-extrabold">{product.price} UGX</p>
				</div>
			</Link>
		</div>
	);
};

export default WishlistCard;
