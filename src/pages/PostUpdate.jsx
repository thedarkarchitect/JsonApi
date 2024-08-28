import React, { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import { useNavigate, useParams } from "react-router-dom";

const PostUpdate = () => {
    const { id } = useParams();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

    const navigate = useNavigate();

    const postSubmit = async (newPost) => {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newPost),
			});
			
			if (response.ok) {
				const updatedPost = await response.json();
				alert("Post updated successfully!");
				console.log(updatedPost); // Log the updated post data
                navigate(`/${id}`);
			} else {
				alert("Failed to update the post.");
			}
		} catch (error) {
			console.error("Error updating post:", error);
			alert("An error occurred while updating the post.");
		}
	};

	const postForm = (e) => {
		e.preventDefault();

		const newPost = {
			title,
			body
		};
		
		setTitle("")
		setBody("")
		
		postSubmit(newPost);
	};

    useEffect(() => {
        const getPost = async (id) => {
            
                console.log(id);
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                const data = await response.json();
                console.log(data);
                setTitle(data.title);
                setBody(data.body);
            
        };
        
        getPost(id);
    }, []);
	
	return (
		<div className="bg-yellow-300 h-screen pb-10">
			<>
				<div className="py-5">
					<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
						<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
							<div className="p-6 bg-white border-b border-gray-200">
								<form onSubmit={postForm}>
									<div className="mb-4">
										<label className="text-xl text-gray-600">
											Title <span className="text-red-500">*</span>
										</label>
										<br />
										<input
											type="text"
											className="border-2 rounded-lg border-gray-600 p-2 w-full"
											name="title"
											id="title"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
											required
										/>
									</div>
									<div className="mb-8">
										<label className="text-xl text-gray-600">
											body <span className="text-red-500">*</span>
										</label>
										<br />
										<textarea
											name="body"
											value={body}
											onChange={(e) => setBody(e.target.value)}
											className="p-5 border-2 rounded-lg border-gray-500 w-full h-[200px]"></textarea>
									</div>

									<div className="py-4">
                                            <button
                                                type="submit"
                                                role="submit"
                                                className="p-3 bg-blue-700 rounded-lg text-white hover:bg-blue-400"
                                                required>
                                                Submit
                                            </button>
										
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</>
		</div>
	);
};

export default PostUpdate;
