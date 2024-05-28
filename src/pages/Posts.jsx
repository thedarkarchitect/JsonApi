import React from "react";
import PostCards from "../components/PostCards";

const Posts = () => {
	return (
		<>
			<div className="bg-yellow-300 p-12">
				<h2 className="pb-10 font-extrabold text-5xl" >Pet Blog</h2>
				<PostCards />
			</div>
		</>
	)
};

export default Posts;
