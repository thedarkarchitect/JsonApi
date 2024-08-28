import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [post, setPost] = useState();

	const onDelete = async (id) => {
		try{
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "DELETE" });
			if(response.ok){
				alert("Post deleted successfully");
				console.log("Post deleted successfully");
			}
		}catch(error){
			console.log("Error deleting post", error);
		}
	};

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/posts/${id}`
				);

				const data = await response.json();
				setPost(data);
				console.log(data);
				setLoading(false);
			} catch (error) {
				console.log("Error fetching data", error);
			}
		};


		fetchProduct();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<div className="p-10">
			<div className="bg-white p-4 rounded-lg shadow-md my-4 border">
				<h2 className="text-xl font-bold mb-2">{post.title}</h2>
				<p className="text-gray-700 mb-4">{post.body}</p>
				<div className="flex justify-end">
					<Link
						className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
						to={`/updatePost/${post.id}`}>

						Edit
					</Link>
					<button
						className="bg-red rounded px-4 py-2 text-white"
						onClick={() => onDelete(post.id)}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
