import React from "react";

const AboutUs = () => {
	return (
		<div className="bg-white">
			<header className="bg-customYellow text-white text-center py-12">
				<h1 className="text-4xl font-bold mt-16">About Us</h1>
			</header>

			<section className="text-center py-12 px-4">
				<h2 className="text-2xl font-bold">Mission</h2>
				<p className="mt-4 text-gray-700 max-w-2xl mx-auto">
					At<span className="font-bold"> PetCo. </span>, our mission is to
					enhance the lives of pets and their owners by providing exceptional
					care, support, and resources. We strive to create a nurturing
					environment where pets can thrive and owners can feel confident in the
					well-being of their furry family members. Our goal is to be a trusted
					partner in every aspect of pet care, from health and wellness to
					training and companionship.
				</p>

				<h2 className="text-2xl font-bold">Values</h2>
				<p className="mt-4 text-black max-w-2xl mx-auto">
					Compassion: We treat all pets and their owners with the utmost
					compassion, understanding, and respect. We believe in providing a
					loving and supportive environment for every pet in our care.
					Excellence: We are committed to excellence in everything we do. From
					our grooming and training services to our veterinary care and customer
					support, we strive to exceed expectations and deliver top-quality
					service. Integrity: Integrity is at the core of our business. We
					operate with honesty, transparency, and accountability, ensuring that
					our clients can trust us to provide the best care for their pets.
					Innovation: We embrace innovation and continuously seek to improve our
					services through the latest advancements in pet care and technology.
					Our goal is to stay at the forefront of the industry to better serve
					our clients and their pets. Community: We believe in the power of
					community and the importance of building strong relationships with our
					clients, local shelters, and animal welfare organizations. We actively
					support and contribute to initiatives that promote the well-being of
					pets in our community.
				</p>
				<div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
					<div className="transition transform hover:scale-110">
						<h3 className="text-xl font-bold">0.2+</h3>
						<p className="text-gray-700">Years of Experience</p>
					</div>
				</div>
			</section>

			<section className="bg-customYellow text-white py-12 px-4">
				<h2 className="text-2xl font-bold text-center">Our Vision</h2>
				<p className="mt-4 text-center max-w-2xl mx-auto text-black font-semibold">
					Our vision at PetCo is to be the leading provider of comprehensive pet
					care solutions, known for our unwavering commitment to the health,
					happiness, and well-being of pets and their owners. We aspire to
					create a world where every pet is cared for with love, respect, and
					the highest standards of care, and where pet owners have access to the
					resources and support they need to nurture their pets throughout their
					lives. Through innovation, community engagement, and a deep passion
					for animal welfare, we aim to set the standard for excellence in the
					pet care industry.
				</p>
			</section>

			<section className="text-center py-12 px-4">
				<h2 className="text-2xl font-bold">Our Specialties</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
					<div className="p-4 shadow-lg rounded-lg bg-yellow-100 hover:bg-yellow-200 transition-colors">
						<h3 className="text-xl font-bold">Pet Products</h3>
					</div>
					<div className="p-4 shadow-lg rounded-lg bg-yellow-100 hover:bg-yellow-200 transition-colors">
						<h3 className="text-xl font-bold">Grooming</h3>
					</div>
					<div className="p-4 shadow-lg rounded-lg bg-yellow-100 hover:bg-yellow-200 transition-colors">
						<h3 className="text-xl font-bold">Training</h3>
					</div>
					<div className="p-4 shadow-lg rounded-lg bg-yellow-100 hover:bg-yellow-200 transition-colors">
						<h3 className="text-xl font-bold">Veterinary</h3>
					</div>
				</div>
			</section>

			<section className="bg-customYellow text-white text-center py-12 px-4">
				<h2 className="text-2xl font-bold">Patient Testimonials</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
					<div className="p-4 shadow-2xl rounded-lg bg-yellow-400 hover:bg-yellow-500 transition-colors">
						<p className="text-black">
							"PetCo has been a lifesaver for me and my pup, Bella. From the
							expert grooming services to the friendly and knowledgeable staff,
							I always know Bella is in great hands. The training programs have
							transformed her behavior, making our bond even stronger. I can’t
							thank PetCo enough for their dedication and care!"
						</p>
						<h3 className="mt-4 font-bold">- Sarah M and Bella</h3>
					</div>
					<div className="p-4 shadow-lg rounded-lg bg-yellow-400 hover:bg-yellow-500 transition-colors">
						<p className="text-black">
							"Adopting Luna was one of the best decisions I’ve ever made, and
							PetCo made the process so smooth and enjoyable. They provided all
							the support and guidance I needed to welcome Luna into our home.
							The pet sitting and photography services are also fantastic – I
							have so many beautiful photos of Luna thanks to PetCo! I wouldn’t
							go anywhere else."
						</p>
						<h3 className="mt-4 font-bold">- John K and Joy</h3>
					</div>
					<div className="p-4 shadow-lg rounded-lg bg-yellow-400 hover:bg-yellow-500 transition-colors">
						<p className="text-black">
							"I’ve tried several pet care services over the years, but none
							compare to PetCo. Their veterinary services are top-notch, and I
							always feel confident bringing Max in for check-ups and
							treatments. The team’s passion for animals shines through in
							everything they do. Highly recommend PetCo for all your pet care
							needs!"
						</p>
						<h3 className="mt-4 font-bold">- Mr. George Kibuuka</h3>
					</div>
				</div>
			</section>

			<section className="text-center py-12 px-4 w-full">
				<h2 className="text-2xl font-bold">
					Get Answer To Your Most Asked Questions
				</h2>
				<div className="mt-8">
					<div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
						<h3 className="text-xl font-bold">
							How do I make an appointment online?
						</h3>
						<p className="mt-2 text-gray-700">
							You can book an appointment online through our website or mobile
							app.
						</p>
					</div>
					<div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
						<h3 className="text-xl font-bold">
							What types of vet medical tests do you offer?
						</h3>
						<p className="mt-2 text-gray-700">
							We offer a wide range of medical tests including blood tests,
							imaging, vaccination and more.
						</p>
					</div>
					<div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
						<h3 className="text-xl font-bold">Do you accept insurance plans?</h3>
						<p className="mt-2 text-gray-700">
							Yes, we accept most major insurance plans.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
