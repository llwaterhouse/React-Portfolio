import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

export default function Contact() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_krplvac', 'template_kuu94rx',e.target, 'user_gWn7XINcIP7WRsS4l3JSn')
		.then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}

	return (
		<div className="container mt-5">
			<h1 className="text-end px-5 mb-5 text-white py-3" id="contact">
				Contact Me
			</h1>
			<form onSubmit={sendEmail} className="row g-3">
				<div className="col-md-6">
					<label htmlFor="firstName" className="form-label">
						First Name
					</label>
					<input type="text" className="form-control" id="firstName" name="fName" required />
				</div>
				<div className="col-md-6">
					<label htmlFor="lastName" className="form-label">
						Last Name
					</label>
					<input type="text" className="form-control" id="lastName" required name="lName" />
				</div>
				<div className="col-md-8">
					<label htmlFor="emailInfo" className="form-label">
						E-mail
					</label>
					<input type="email" className="form-control" id="emailInfo" required name="fromEmail" />
				</div>
				<div className="col-md-4">
					<label htmlFor="phoneNumber" className="form-label">
						Phone Number
					</label>
					<input type="text" className="form-control" id="phoneNumber" placeholder="(XXX) XXX-XXXX" name="phone" />
				</div>
				<div className="col-md-12">
					<label htmlFor="comments" className="form-label">
						Comments, Questions?
					</label>
					<textarea className="form-control" id="comments" rows="3" required name="message"/>
				</div>
				<div className="col-md-12">
					<button type="submit" className="btn btn-success" id="submit">
						Submit
					</button>
				</div>
			</form>

		</div>
	);
}
