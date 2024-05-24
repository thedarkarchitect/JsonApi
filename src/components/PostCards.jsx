import React, { useState, useEffect } from "react";
import PostCard from "./PostCard.jsx";

const PostCards = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch("https://petco.onrender.com/api/v1/posts/");
				const data = await res.json();
				setPosts(data.posts);
			} catch (error) {
				console.log("Error fetching data", error);
			}
		};

		fetchPosts();
	}, []);

	return (
		<div className="grid gap-4 md:gap-6 sm:grid-cols-1 lg:grid-cols-2">
			{posts.map((post) => (
                <div className="py-6">
                    <PostCard className="py-4" key={post.id} image={post.imageUrl} title={post.title} content={post.content} />
                </div>
				
			))}
		</div>
	);
};

export default PostCards;
