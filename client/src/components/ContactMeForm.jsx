import React, { useState } from 'react';
import { sendMail } from '../actions/sendMail';
import '../Css/contactMe.css'


const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
    const handleContactFormClick = async (e) => {
		e.preventDefault();
        const form = {
            name: e.target.form[0].value,
            email: e.target.form[1].value,
            message: e.target.form[2].value
        }
		console.log("This is contact me form", form)
        await sendMail(form)
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
		};
	if (submitted) {
		return (
			<>
				<div className="titleWrapper">
					<div className="titleContainer">
						<h1>Thank you!</h1>
					</div>
					<div className="titleContainer">
						<h2>We'll be in touch soon.</h2>
					</div>
				</div>
			</>
		);
	}
	return (
	<>
	<div className='titleWrapper'>
		<div className='titleContainer'>
			<h4>Please do not hesitate to contact me!</h4>
		</div>
		<div className='descriptionContainer'>
			<p>I keep tabs on my email everyday!</p>
		</div>
	</div>
		<form
			id="contact-form"
			className="flex flex-col justify-center items-center gap-1.5 mt-20 ">
			<div className="mb-3 pt-0 w-10/12">
				<input
					type="text"
					placeholder="Your name"
					name="name"
					className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl"
					required
				/>
			</div>
			<div className="mb-3 pt-0 w-10/12 ">
				<input
					type="email"
					placeholder="Email"
					name="email"
					className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl "
					required
				/>
			</div>
			<div className="mb-3 pt-0 w-10/12">
				<textarea
					placeholder="Your message"
					name="message"
					className=" placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl p-2"
					required
				/>
			</div>
			<div className="mb-3 pt-0">
				<button
					onClick={(e) => handleContactFormClick(e)}
					className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="submit">
					Send a message
				</button>
			</div>
		</form>
	</>
	);
};

export default ContactForm;
