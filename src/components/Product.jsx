import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import {jwtDecode} from "jwt-decode"; // Correct import statement

const Product = ({ item }) => {
    const [wishList, setWishlist] = useState([]);
    const [ownerId, setOwnerId] = useState(0);

    const isLogged = localStorage.getItem("token");

    const truncateString = (str, maxLength) => {
        return str.length <= maxLength ? str : `${str.slice(0, maxLength)}...`;
    };

    useEffect(() => {
        if (isLogged) {
            const { userid } = jwtDecode(isLogged);
            setOwnerId(userid);

            const fetchWishlist = async () => {
                try {
                    const response = await fetch(
                        `https://petco.onrender.com/api/v1/wishlist/get-user-wishlist/${userid}`
                    );
                    const data = await response.json();
                    setWishlist(data.wishList || []);
                } catch (error) {
                    console.error("Failed to fetch wishlist", error);
                }
            };

            fetchWishlist();
        }
    }, []);

    const addToWishlist = async (productId) => {
        if (!ownerId) {
            alert("Please log in to add items to your wishlist.");
            return;
        }

        try {
            const wishlistItem = { userId: ownerId, productId };
            const response = await fetch(
                "https://petco.onrender.com/api/v1/wishlist/add-to-wishList",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(wishlistItem),
                }
            );

            if (!response.ok) {
                alert("Already in Wishlist!");
            } else {
                const newItem = await response.json();
                setWishlist((prevWishlist) => [...prevWishlist, newItem]);
            }
        } catch (error) {
            console.error("Failed to add to wishlist", error);
            alert("Failed to add to Wishlist");
        }
    };

    return (
        <div className="relative product-card border border-yellow-300 hover:border-yellow-400 rounded-lg w-[150px] h-[250px] shadow-2xl group">
            <Link to={`/products/${item.id}`}>
                <div className="flex justify-center overflow-hidden p-2 h-[170px] relative">
                    <img src={item.imageUrl} alt={item.name} className="object-contain" />
                </div>
            </Link>
            <div className="absolute bottom-0 w-full bg-white bg-opacity-75 p-2 rounded-b-lg">
                <p className="text-md font-semibold overflow-x-hidden truncate">
                    {truncateString(item.name, 17)}
                </p>
                <p className="text-md text-black font-extrabold">{item.price} UGX</p>
            </div>
            {isLogged && (
                <div className="absolute bottom-11 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Link to={`/products/${item.id}`}>
                        <div className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                            <IoMdCart className="text-customYellow" />
                        </div>
                    </Link>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToWishlist(item.id);
                        }}
                        className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                        <FaHeart className="text-customYellow" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Product;
