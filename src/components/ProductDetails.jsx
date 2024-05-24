import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await fetch(
					`https://petco.onrender.com/api/v1/products/${id}`
				);

				const data = await response.json();
				setProduct(data.product);
				setLoading(false);
			} catch (error) {
				console.log("Error fetching data", error);
			}
		};
		fetchProduct();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<div className="product-detail-container">
				<div>
					<div className="image-container w-[200px]">
						<img src={product.imageUrl} />
					</div>
				</div>
				<div className="product-details-desc">
					<h1>{product.name}</h1>
					<div className="flex justify-center">
						<div>
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiFillStar />
							<AiOutlineStar />
						</div>
						<p>(20)</p>
					</div>
					<h4>Details: </h4>
					<p>{product.description}</p>
				</div>
			</div>
		</div>
	);
};

const Products = async (id) => {
	const response = await fetch(`http://localhost:3001/api/products`);
	const data = await response.json();
};

export default ProductDetails;
