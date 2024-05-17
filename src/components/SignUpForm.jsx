import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = ({ userSubmit }) => {
	const [firstName, setfName] = useState("");
	const [lastName, setlName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const postForm = (e) => {
		e.preventDefault();

		const newUser = {
			firstName,
			lastName,
			username,
			email,
			password,
		};

        userSubmit(newUser)
		return navigate();
	};
	return (
		<>
			<span className="mb-3 text-4xl font-bold">Sign Up</span>
			<span className="font-light text-gray-400 mb-4">
				Please enter your details
			</span>
			<form onSubmit={postForm}>
				<div className="py-2">
					<span className="mb-2 text-md">First Name</span>
					<input
						type="text"
						className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
						name="fName"
						id="fName"
						value={firstName}
						onChange={(e) => setfName(e.target.value)}
						required
					/>
				</div>
				<div className="py-2">
					<span className="mb-2 text-md">Last Name</span>
					<input
						type="text"
						className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
						name="lName"
						id="lName"
						value={lastName}
						onChange={(e) => setlName(e.target.value)}
						required
					/>
				</div>
				<div className="py-2">
					<span className="mb-2 text-md">Username</span>
					<input
						type="text"
						className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
						name="username"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="py-2">
					<span className="mb-2 text-md">Email</span>
					<input
						type="text"
						className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="py-2">
					<span className="mb-2 text-md">Password</span>
					<input
						className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
						type="password"
						name="pass"
						id="pass"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<div className="py-4">
					<button
						className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
						type="submit">
						Sign in
					</button>
				</div>
				<p>
					Have an account already?
					<Link className="text-yellow-500 hover:text-black" to="/auth/Login">
						{" "}
						Login
					</Link>
				</p>
			</form>
		</>
	);
};

export default SignUpForm;
