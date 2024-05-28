import React, { useState, useEffect } from "react";
import Product from "../components/Product";

const Shop = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("https://petco.onrender.com/api/v1/products/");
				const data = await res.json();
				setProducts(data.products);
			} catch (error) {
				console.log("Error fetching data", error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="flex justify-center">
			<div className="grid lg:grid-cols-10 md:grid-cols-4 sm:grid-cols-2 gap-6 p-12 ">
				{products.map((products) => (
					<Product
						key={products.id}
						id={products.id}
						image={products.imageUrl}
						price={products.price}
						name={products.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Shop;
