import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({id, title, image, content }) => {
	return (
		<div className="bg-white rounded-lg w-[800px] md:w-auto shadow-md border border-gray-200 sm:w-auto">
			<Link to={`/posts/blog/${id}`}> 
				<div>
					<img className="rounded-t-lg w-full" src={image} alt="image" />
				</div>

				<div className="p-5">
					<div className="text-gray-900 font-bold text-2xl tracking-tight mb-5">
						<p>{title}</p>
					</div>

					<div className="font-normal text-gray-700">
						<p>{content.substring(0, 1000) + "...."}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default PostCard;
