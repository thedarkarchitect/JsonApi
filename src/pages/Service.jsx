import React from "react";
import ServiceCards from "../components/ServiceCards";
import training from "../assets/training.jpg";
import adoption from "../assets/adoption.jpg";
import grooming from "../assets/grooming.jpg";
import Photography from "../assets/photography.jpg";
import sitting from "../assets/sitting.jpg";
import veterinary from "../assets/veterinary.jpg";
import PetForm from "../components/PetForm";
import AppointmentForm from "../components/AppointmentForm";

const Service = () => {
	return (
		<>
			<div className="flex flex-col">
				<h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
					Services Offered At PetCo.
				</h1>
				<div className="flex overflow-x-scroll px-3 gap-4 pb-10">
					<div className="w-80 h-100 rounded-lg shadow-md hover:shadow-2xl flex-shrink-0">
						<ServiceCards
							image={training}
							title={"Training your pet"}
							description={
								"Expert training programs for pets of all ages to improve behavior, obedience, and socialization skills."
							}
						/>
					</div>
					<div className="w-80 h-100 rounded-lg shadow-md hover:shadow-2xl flex-shrink-0">
						<ServiceCards
							image={Photography}
							title={"Photography"}
							description={
								"High-quality pet photography sessions to capture memorable moments and create lasting memories"
							}
						/>
					</div>
					<div className="w-80 h-100 rounded-lg shadow-md hover:shadow-2xl flex-shrink-0">
						<ServiceCards
							image={sitting}
							title={"Pet Sitting"}
							description={
								"Reliable pet sitting services providing attentive care and companionship for your pets while you're away. "
							}
						/>
					</div>
					<div className="w-80 h-100 rounded-lg shadow-md hover:shadow-2xl flex-shrink-0">
						<ServiceCards
							image={adoption}
							title={"Pet Adoption"}
							description={
								"Assistance with pet adoption processes, helping you find and welcome a new furry family member into your home."
							}
						/>
					</div>
					<div className="w-80 h-100 rounded-lg shadow-md hover:shadow-2xl flex-shrink-0">
						<ServiceCards
							image={veterinary}
							title={"Veterinary Services"}
							description={
								"Maintain your pet's health with comprehensive veterinary care, from check-ups to emergency treatments."
							}
						/>
					</div>
					<div className="w-80 h-100 rounded-lg shadow-md hover:shadow-2xl flex-shrink-0">
						<ServiceCards
							image={grooming}
							title={"Pet Grooming"}
							description={
								"Keep your pet clean and stylish with professional grooming, including baths, haircuts, nail trims, and ear cleaning."
							}
						/>
					</div>
				</div>
			</div>

			<div>
				<h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
					Enter Pet Details
				</h1>
				<div className="px-11 pb-11">
					<PetForm />
				</div>
			</div>

			<div>
				<h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
					Book an Appointment
				</h1>
				<div className="px-11 pb-11">
					<AppointmentForm />
				</div>
			</div>
		</>
	);
};

export default Service;
