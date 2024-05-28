import React from "react";
import ProductForm from "../components/ProductForm";

const ProductUpload = () => {
	const createProduct = async (newProduct) => {
		try {
			console.log(newProduct);
			await fetch("https://petco.onrender.com/api/v1/products/createProduct", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			});
			
			alert("Post created Successfully!");
		} catch (error) {
			console.log("Error", error);
			alert(" Failed to make a post, try again later");
		}
	};

	return (
		<div className="bg-yellow-300 h-screen">
			<ProductForm productSubmit={createProduct} />
		</div>
	);
};

export default ProductUpload;
