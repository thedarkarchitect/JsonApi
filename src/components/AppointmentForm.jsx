import { useState } from "react";
import appointment from "../assets/appoint.jpg";

const AppointmentForm = () => {
	const [service, setService] = useState("Choose a Service");
	const [date, setDate] = useState("");
	const [notes, setNotes] = useState("");

	const postForm = (e) => {
		e.preventDefault();

		const appointment = {};
		console.log(appointment);
		// userlogged(user);

		setService("Choose a Service");
		setDate("");
		setNotes("");
	};

	return (
		<div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
			<div>
				<div className="flex flex-col justify-center md:p-14 sm:p-9">
					<>
						<span className="font-semibold text-gray-400 mb-4">
							Please Enter Details Here
						</span>
						<form onSubmit={postForm}>
							<div className="py-4">
								<span className="mb-2 text-md">Breed</span>
								<select
									id="service"
									name="service"
									value={service}
									onChange={(e) => setService(e.target.value)}
									className="bg-gray-50 border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
									<option>Choose a Service</option>
									<option value="PHOTOGRAPHY">Photography</option>
									<option value="SPECIALTY_SERVICES">
										Speciality Services
									</option>
									<option value="PET_SITTING">Pet Sitting</option>
									<option value="PET_ADOPTION">Pet Adoption</option>
									<option value="VETERINARY_SERVICES">
										Veterinary Servicest
									</option>
									<option value="PET_TRAINING">Pet Training</option>
									<option value="PET_GROOMING">Pet Grooming</option>
								</select>
							</div>
							<div className="py-4">
								<span className="mb-2 text-md">Date</span>
								<input
									type="text"
									name="Date"
									id="Date"
									placeholder="yyyy-mm-dd"
									className="w-full p-2 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-500"
									value={date}
									onChange={(e) => setBreed(e.target.value)}
									required
								/>
							</div>
							<div className="py-4">
								<span className="mb-2 text-md">Age</span>
								<textarea
									type="text"
									name="notes"
									id="notes"
									className="w-full h-[100px] p-2 border border-yellow-300 rounded-md placeholder:font-light placeholder:text-gray-500"
									value={notes}
									onChange={(e) => setNotes(e.target.value)}
									required
								/>
							</div>

							<div className="pt-4">
								<button
									className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-customYellow hover:text-black hover:border hover:border-gray-300"
									type="submit">
									Book Appointment
								</button>
							</div>
						</form>
					</>
				</div>
			</div>
			<div className="relative">
				<img
					src={appointment}
					alt="img"
					className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
				/>
			</div>
		</div>
	);
};

export default AppointmentForm;
