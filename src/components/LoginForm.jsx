import { Link } from "react-router-dom"


const LoginForm = () => {
  return (
    <>
			<span className="mb-3 text-4xl font-bold">Login Up</span>
			<span className="font-light text-gray-400 mb-4">
				Please enter your details
			</span>
			<div className="py-4">
				<span className="mb-2 text-md">Email</span>
				<input
					type="text"
					className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
					name="email"
					id="email"
				/>
			</div>
			<div className="py-4">
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
            <div className="pt-4">
            <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
				Login
			</button>
            </div>
			<p>Have no account! <Link className="text-yellow-500 hover:text-black" to="/auth/SignUp" >SignUp</Link></p>
			
		</>
  )
}

export default LoginForm
