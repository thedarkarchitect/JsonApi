import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
	const [products, setProducts] = useState([]);

	const getRandomProducts = (products) => {
		return products.sort(() => 0.5 - Math.random()).slice(0, 12);
	};

	const randomProducts = getRandomProducts(products);

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
		<div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
			{randomProducts.map((products) => (
				<Product
					key={products.id}
					id={products.id}
					image={products.imageUrl}
					price={products.price}
					name={products.name}
				/>
			))}
		</div>
	);
};

export default Products;
