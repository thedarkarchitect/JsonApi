import { Link } from "react-router-dom";


const SignUpForm = () => {
	return (
		<>
			<span className="mb-3 text-4xl font-bold">Sign Up</span>
			<span className="font-light text-gray-400 mb-4">
				Please enter your details
			</span>
			<div className="py-2">
				<span className="mb-2 text-md">First Name</span>
				<input
					type="text"
					className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
					name="fName"
					id="fName"
				/>
			</div>
			<div className="py-2">
				<span className="mb-2 text-md">Last Name</span>
				<input
					type="text"
					className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
					name="lName"
					id="lName"
				/>
			</div>
			<div className="py-2">
				<span className="mb-2 text-md">Username</span>
				<input
					type="text"
					className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
					name="username"
					id="username"
				/>
			</div>
			<div className="py-2">
				<span className="mb-2 text-md">Email</span>
				<input
					type="text"
					className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
					name="email"
					id="email"
				/>
			</div>
			<div className="py-2">
				<span className="mb-2 text-md">Password</span>
				<input
					type="password"
					name="pass"
					id="pass"
					className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
				/>
			</div>
			{/* <div className="flex justify-between w-full py-4">
				<span className="font-bold text-md">Forgot password</span>
			</div> */}
            <div className="py-4">
            <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
				Sign in
			</button>
            </div>
			
			<p>Have an account already?<Link className="text-yellow-500 hover:text-black" to="/auth/Login" > Login</Link></p>
		</>
	);
};

export default SignUpForm;
