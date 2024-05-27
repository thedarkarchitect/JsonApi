import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
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
		<div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
			{products.map((products) => (
				<Product
					key={products.id}
					id={products.id}
					image={products.imageUrl}
					price={products.price}
					name={products.name}
				/>
			))}
			{/* <Product 
				key={products[6].id}
				id={products[6].id}
				image={products[0].imageUrl}
				price={products[6].price}
				name={products[6].name}
			/> */}
		</div>
	);
};

export default Products;
