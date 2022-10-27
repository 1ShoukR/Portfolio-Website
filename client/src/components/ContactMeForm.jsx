import React, { useState } from 'react';
import { sendMail } from '../actions/sendMail';


const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
    const handleContactFormClick = async (e) => {
		e.preventDefault();
        const form = {
            name: e.target.form[0].value,
            email: e.target.form[1].value,
            message: e.target.form[2].value
        }
        await sendMail(form)
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
		};
	if (submitted) {
		return (
			<>
				<div className="text-2xl">Thank you!</div>
				<div className="text-md">We'll be in touch soon.</div>
			</>
		);
	}
	return (
		<form id="contact-form">
			<div className="mb-3 pt-0">
				<input
					type="text"
					placeholder="Your name"
					name="name"
					className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
					required
				/>
			</div>
			<div className="mb-3 pt-0">
				<input
					type="email"
					placeholder="Email"
					name="email"
					className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
					required
				/>
			</div>
			<div className="mb-3 pt-0">
				<textarea
					placeholder="Your message"
					name="message"
					className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
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
	);
};

export default ContactForm;
