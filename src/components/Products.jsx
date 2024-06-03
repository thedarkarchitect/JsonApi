import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const getRandomProducts = (products) => {
		return products.sort(() => 0.5 - Math.random()).slice(0, 12);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch("https://petco.onrender.com/api/v1/products/");
				const data = await res.json();
				setProducts(data.products);
				setLoading(false);
			} catch (error) {
				setError("Error fetching data");
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	const randomProducts = getRandomProducts(products);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div className="grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 gap-6">
			{randomProducts.map((item) => (
				<Product key={item.id} item={item} />
			))}
		</div>
	);
};

export default Products;
