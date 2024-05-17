import React from "react";

const PostCard = ({title, image, content}) => {


	return (
		<div className="bg-white rounded-lg w-[800px] md:w-auto shadow-md border border-gray-200 sm:w-auto">
			<a href="#">
                <div>
                    <img className="rounded-t-lg w-full" src={image} alt="image" />
                </div>
            </a>
            <div className="p-5">
                <a href="#">
                    <a href="#">
                        <div className="text-gray-900 font-bold text-2xl tracking-tight mb-5">
                            <p>{title}</p>
                        </div>
                    </a>

                    <div className="font-normal text-gray-700">
                        <p>{ content.substring(0, 1000) + "...." }</p>
                    </div>
                </a>
            </div>
		</div>
	);
};

export default PostCard;
