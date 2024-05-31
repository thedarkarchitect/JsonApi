import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import { useAuth } from "../AuthProvider";

const Shop = () => {

	const user = localStorage.getItem("user")
	const [currentPage, setCurrentPage] = useState(1);
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

	const productsPerPage = 10; //number pfproducts per page

	const totalPages = Math.ceil(products.length / productsPerPage); //calculate the toatal number of pages

	//get the products for the current page
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	// const toggleWishlist = (id) => {
		// setWishlist((prevWishlist) =>
		// 	prevWishlist.includes(id)
		// 		? prevWishlist.filter((productId) => productId !== id)
		// 		: [...prevWishlist, id]
		// );

	// };

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<>
			<div className="flex justify-center">
				<div className="grid lg:grid-cols-10 md:grid-cols-4 sm:grid-cols-2 gap-6 p-12 ">
					{currentProducts.map((product) => (
						<Product
							key={product.id}
							item={product}
						/>
					))}
				</div>
			</div>

			<div className="flex justify-center mt-4 pb-7">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-4 py-2 mx-2 bg-white border-2 border-customYellow hover:bg-customYellow rounded-lg">
					Previous
				</button>
				{[...Array(totalPages).keys()].map((number) => (
					<button
						key={number + 1}
						onClick={() => handlePageChange(number + 1)}
						className={`px-4 py-2 mx-2 ${
							currentPage === number + 1
								? "bg-customYellow text-white"
								: "bg-white border-2 border-customYellow"
						} rounded`}>
						{number + 1}
					</button>
				))}
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-4 py-2 mx-2 bg-white border-2 border-customYellow hover:bg-customYellow rounded-lg">
					Next
				</button>
			</div>
		</>
	);
};

export default Shop;
