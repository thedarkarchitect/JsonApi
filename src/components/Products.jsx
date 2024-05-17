import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("http://localhost:3001/api/products");
				const data = await res.json();
				setProducts(data.products);
			} catch (error) {
				console.log("Error fetching data", error);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="grid grid-cols-4 gap-4">
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
	);
};

export default Products;
