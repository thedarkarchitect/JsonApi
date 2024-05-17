import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/posts/${id}`);
 
                const data = await response.json();
                setPost(data.post);
                setLoading(false);
            } catch(error) {
                console.log("Error fetching data", error);
            }
        }
        fetchPost();
    }, []);

    if (loading) return <p>Loading...</p>;

	return(
        <div>
            <img className="p-32 md:p-16 sm:p-8 w-full  object-cover lg:rounded " src={post.imageUrl} alt="pic"/>
            <div className="px-4 lg:px-0">
                <h2 class="py-4 px-16 text-4xl font-semibold text-gray-800 leading-tight">
                    {post.title}
                </h2>
            </div>
            <div class="justify-center px-16 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                <p class="pb-12">
                    {post.content}
                </p>
            </div>

        </div>
    )
};


export default PostDetails;
