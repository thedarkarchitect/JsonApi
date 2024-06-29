import { useState } from "react";
import React from "react";

const PostForm = ({postSubmit}) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [previewImage, setPreviewImage] = useState("");

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
			content,
			imageUrl,
		};
		
		setTitle("")
		setContent("")
		setImageUrl("")
		return postSubmit(newPost);
	};

	return (
		<>
			<div className="py-12">
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
										className="border-2 rounded-lg border-gray-300 p-2 w-full"
										name="title"
										id="title"
										value={ title }
                                        onChange={ (e) => setTitle(e.target.value) }
										required
									/>
								</div>
								<div className="mb-8">
									<label className="text-xl text-gray-600">
										Content <span className="text-red-500">*</span>
									</label>
									<br />
									<textarea
										name="content"
										value={ content }
                                        onChange={ (e) => setContent(e.target.value) }
										className="p-5 border-2 rounded-lg border-gray-500 w-full h-[400px]"></textarea>
								</div>

								<div>
									<label className="text-xl text-gray-600 ">ImageUrl</label>
									<br/>
									<input
										type="file"
                                        className="border-2 rounded-lg border-gray-300 p-2 w-10/12"
										name="imageUrl"
										id="imageUrl"
										onChange={handleImageChange}
										required
									/>
									{ previewImage && <img src={previewImage} alt="preview" className="w-[200px] h-[200px]"/>}
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

export default PostForm;
