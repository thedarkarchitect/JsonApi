import signupPic from "../assets/signup.jpg";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
	const createUser = async (newUser) => {
		try{
			console.log(newUser)
			await fetch("https://petco.onrender.com/api/v1/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json", 
				},
				body: JSON.stringify(newUser)
			});
			alert("User posted Successfully!");
		} catch(error) {
			console.log("Error", error)
			alert(" Failed to post user, try again later")
		}
	} 

	return (
		<div className="flex items-center justify-center min-h-screen bg-yellow-300">
			<div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
				<div>
					{/* left - side */}
					<div className="flex flex-col justify-center p-8 md:p-14">
						<SignUpForm userSubmit={createUser} route={"/auth/Login"} />
					</div>
				</div>
                <div className="relative">
                    <img src={ signupPic } alt="img"  className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"/>
                </div>
			</div>
		</div>
	);
};

export default SignUp;
