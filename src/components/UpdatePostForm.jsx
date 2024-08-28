import { useState } from "react";
import React from "react";

const UpdatePostForm = ({postSubmit}) => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onloadend = () => {
			setImageUrl(reader.result);
			setPreviewImage(reader.result);
		};
		reader.readAsDataURL(file);
	}

	const postForm = (e) => {
		e.preventDefault();

		const newPost = {
			title,
			body
		};
		
		setTitle("")
		setBody("")

		alert("Post created Successfully!");
		
		return postSubmit(newPost);
	};

	return (
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
										value={ title }
                                        onChange={ (e) => setTitle(e.target.value) }
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
										value={ body }
                                        onChange={ (e) => setBody(e.target.value) }
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
	);
};

export default UpdatePostForm;
