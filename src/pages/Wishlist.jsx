import React, { useEffect, useState } from "react";
import WishlistCard from "../components/WishlistCard";
import { jwtDecode } from "jwt-decode";

const Wishlist = () => {
	const isLogged = localStorage.getItem("token");
	const [wishlist, setWishlist] = useState([]);
    const [ownerId, setOwnerId] = useState(0);

	useEffect(() => {
		if (isLogged) {
			const userId = jwtDecode(isLogged);
            setOwnerId(userId.userid)

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
				}
			};

			fetchWishlist();
		}
	}, [isLogged]);

	return (
		<div className="grid gap-4 sm:grid-cols-1 sm:justify-center sm:p-12 md:grid-cols-2 lg:grid-row-3 xl:grid-row-4">
			{wishlist.map((items) => (
				<div key={items.id} className="p-12">
					<WishlistCard
						id={items.id}
						productId={items.productId}
                        ownerId={ownerId}
					/>
				</div>
			))}
		</div>
	);
};

export default Wishlist;
