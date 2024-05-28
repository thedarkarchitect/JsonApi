import { useState } from "react";
import pet from "../assets/pet.jpg";

const PetForm = () => {
	const [name, setName] = useState("");
	const [type, setType] = useState("Choose a Type");
	const [breed, setBreed] = useState("");
	const [age, setAge] = useState(0);

	const postForm = (e) => {
		e.preventDefault();

		const pet = {};
		console.log(pet);
		// userlogged(user);

		setName("");
		setType("Choose a Type");
		setBreed("");
		setAge(0);
	};

	return (
		<div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
			<div className="relative">
				<img
					src={pet}
					alt="img"
					className="w-[400px] h-full hidden rounded-l-2xl md:block object-cover"
				/>
			</div>
			<div>
				<div className="flex flex-col justify-center md:p-14 sm:p-9">
					<>
						<span className="font-semibold text-gray-400 mb-4">
							Please Enter Details Here
						</span>
						<form onSubmit={postForm}>
							<div className="py-4">
								<span className="mb-2 text-md">Pet Name</span>
								<input
									type="text"
									className="w-full p-2 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-500"
									name="name"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div className="py-4">
								<span className="mb-2 text-md">Breed</span>
								<select
									id="type"
									name="type"
									value={type}
									onChange={(e) => setType(e.target.value)}
									className="bg-gray-50 border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
									<option>Choose a Type</option>
									<option value="DOG">Dog</option>
									<option value="CAT">Cat</option>
									<option value="BIRD">Bird</option>
									<option value="FISH">Fish</option>
									<option value="RABBIT">Rabbit</option>
									<option value="OTHER">Other</option>
								</select>
							</div>
							<div className="py-4">
								<span className="mb-2 text-md">Breed</span>
								<input
									type="text"
									name="breed"
									id="breed"
									className="w-full p-2 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-500"
									value={breed}
									onChange={(e) => setBreed(e.target.value)}
									required
								/>
							</div>
							<div className="py-4">
								<span className="mb-2 text-md">Age</span>
								<input
									type="number"
									name="age"
									id="age"
									className="w-full p-2 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-500"
									value={age}
									onChange={(e) => setAge(e.target.value)}
									required
								/>
							</div>

							<div className="pt-4">
								<button
									className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-customYellow hover:text-black hover:border hover:border-gray-300"
									type="submit">
									Add Your Pet
								</button>
							</div>
						</form>
					</>
				</div>
			</div>
		</div>
	);
};

export default PetForm;
