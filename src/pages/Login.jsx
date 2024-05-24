import LoginForm from "../components/LoginForm";
import loginPic from "../assets/login.jpg";

const Login = () => {
	const loginUser = async (user) => {
		try {
			console.log(user);
			await fetch("https://petco.onrender.com/api/v1/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			alert("User logged in Successfully!");
		} catch (error) {
			console.log("Error", error);
			alert(" Failed to login user, try again ");
		}
	};

	return (
		<div>
			<div className="flex items-center justify-center min-h-screen bg-yellow-300">
				<div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
					<div>
						{/* left - side */}
						<div className="flex flex-col justify-center p-8 md:p-14">
							<LoginForm userlogged={loginUser} route={"/"} />
						</div>
					</div>
					<div className="relative">
						<img
							src={loginPic}
							alt="img"
							className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
