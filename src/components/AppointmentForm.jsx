import { useState, useEffect } from "react";
import appointment from "../assets/appoint.jpg";
import { jwtDecode } from "jwt-decode";

const AppointmentForm = () => {
	const [service, setService] = useState("Choose a Service");
	const [date, setDate] = useState("");
	const [notes, setNotes] = useState("");
	const [ownerId, setOwnerId] = useState(0);
	const [pets, setPets] = useState([]);
	const [petOption, setPetOption] = useState("Choose a Pet");

	const isLogged = localStorage.getItem("token");

	useEffect(() => {
		if (isLogged) {
			const userId = jwtDecode(isLogged);
			setOwnerId(userId.userid);

			const fetchPets = async () => {
				try {
					const response = await fetch(
						`https://petco.onrender.com/api/v1/pet/get-owner-pet/${userId.userid}`
					);
					const data = await response.json();
					console.log(data.Pets);
					setPets(data.Pets || []);
					console.log(pets);
				} catch (error) {
					console.log(error);
				}
			};

			fetchPets();
		}
	}, [isLogged]);

	const addAppointment = async (petAppointment) => {
		try {
			const response = await fetch(
				"https://petco.onrender.com/api/v1/appointments/createAppointment",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(petAppointment),
				}
			);

			alert("Appointment Scheduled successfully.");
		} catch (error) {
			console.log(error);
			alert("Failed to add pet");
		}
	};

	const postForm = (e) => {
		e.preventDefault();

		const appointment = {
			petId: parseInt(petOption),
			service,
			appointmentDate: date,
			notes,
		};

		console.log(appointment);
		addAppointment({ ...appointment, ownerId });

		setService("Choose a Service");
		setPetOption("Choose a Pet");
		setDate("");
		setNotes("");
	};

	return (
		<div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
			<div>
				<div className="flex flex-col justify-center md:p-14 sm:p-10">
					<>
						<span className="font-semibold text-gray-400 mb-4">
							Please Enter Details Here
						</span>
						<form onSubmit={postForm}>
							<div className="py-4">
								<span className="mb-2 text-md">Service</span>
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
								<span className="mb-2 text-md">User Pets</span>
								<select
									id="pet"
									name="pet"
									value={petOption}
									onChange={(e) => setPetOption(e.target.value)}
									className="bg-gray-50 border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
									<option>Choose a Pet</option>
									{pets.map((pet) => (
										<option key={pet.id} value={pet.id}>
											{pet.name}
										</option>
									))}
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
									onChange={(e) => setDate(e.target.value)}
									required
								/>
							</div>
							<div className="py-4">
								<span className="mb-2 text-md">Notes</span>
								<textarea
									type="text"
									name="notes"
									id="notes"
									placeholder="Enter notes"
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
