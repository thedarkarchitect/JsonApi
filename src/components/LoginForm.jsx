import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ userlogged, route }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const postForm = (e) => {
		e.preventDefault();

		const user = {
			email,
			password,
		};
		console.log(user);
		userlogged(user);
		return navigate(route);
	};

	return (
		<>
			<span className="mb-3 text-4xl font-bold">Login Up</span>
			<span className="font-light text-gray-400 mb-4">
				Please enter your details
			</span>
			<form onSubmit={postForm}>
				<div className="py-4">
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
				<div className="py-4">
					<span className="mb-2 text-md">Password</span>
					<input
						type="password"
						name="pass"
						id="pass"
						className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<div className="pt-4">
					<button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300" type="submit">
						Login
					</button>
				</div>
				<p>
					Have no account!{" "}
					<Link className="text-yellow-500 hover:text-black" to="/auth/SignUp">
						SignUp
					</Link>
				</p>
			</form>
		</>
	);
};

export default LoginForm;
