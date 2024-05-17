import React, {useState} from "react";

const ProductForm = ({ productSubmit }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("Choose a Category");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
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
	};

	const postForm = (e) => {
		e.preventDefault();

		const newProduct = {
			name,
			description,
			category,
			price,
			quantity,
			imageUrl,
		};

		console.log(newProduct);
		return productSubmit(newProduct);
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
										Name <span className="text-red-500">*</span>
									</label>
									<br />
									<input
										type="text"
										className="border-2 rounded-lg border-gray-300 p-2 w-full"
										name="name"
										id="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										required
									/>
								</div>
								<div className="mb-8">
									<label className="text-xl text-gray-600">
										Description <span className="text-red-500">*</span>
									</label>
									<br />
									<input
										type="text"
										className="border-2 rounded-lg border-gray-300 p-2 w-full"
										name="description"
										id="description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										required
									/>
								</div>
								<div className="mb-8">
									<label className="text-xl text-gray-600">
										Category <span className="text-red-500">*</span>
									</label>
									<br />
									{/* <input
										type="text"
										className="border-2 rounded-lg border-gray-300 p-2 w-full"
										name="category"
										id="category"
										value={ category }
                                        onChange={ (e) => setCategory(e.target.value) }
										required
									/> */}
									<select
										id="category"
										name="category"
										value={category}
										onChange={(e) => setCategory(e.target.value)}
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
										<option >Choose a category</option>
										<option value="PET_FOOD">Pet Food</option>
										<option value="PET_SUPPLIES">Pet Supplies</option>
										<option value="PET_FURNITURE">Pet Furniture</option>
										<option value="TOYS">Toys</option>
										<option value="GROOMING_PRODUCTS">Grooming Products</option>
										<option value="APPAREL">Apparel</option>
										<option value="TRAINING_AIDS">Training Aids</option>
										<option value="HOUSING">Housing</option>
										<option value="BOOKS_AND_EDUCATIONAL_MATERIALS">
											Books and Educational Materials
										</option>
										<option value="GIFTS_AND_SPECIALTY_ITEMS">
											Gifts and Speciality Items
										</option>
									</select>
								</div>
								<div className="mb-8">
									<label className="text-xl text-gray-600">
										Price <span className="text-red-500">*</span>
									</label>
									<br />
									<input
										type="number"
										className="border-2 rounded-lg border-gray-300 p-2 w-full"
										name="price"
										id="price"
										value={price}
										onChange={(e) => setPrice(e.target.value)}
										required
									/>
								</div>
								<div className="mb-8">
									<label className="text-xl text-gray-600">
										Quantity <span className="text-red-500">*</span>
									</label>
									<br />
									<input
										type="number"
										className="border-2 rounded-lg border-gray-300 p-2 w-full"
										name="quantity"
										id="quantity"
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
										required
									/>
								</div>
								<div>
									<label className="text-xl text-gray-600 ">ImageUrl</label>
									<br />
									<input
										type="file"
										className="border-2 rounded-lg border-gray-300 p-2 w-10/12"
										name="imageUrl"
										id="imageUrl"
										onChange={handleImageChange}
										required
									/>
									{previewImage && (
										<img
											src={previewImage}
											alt="preview"
											className="w-[200px] h-[200px]"
										/>
									)}
								</div>

								<div className="flex py-4">
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

export default ProductForm;
