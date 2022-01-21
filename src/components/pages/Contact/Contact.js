import React from 'react';
import './Contact.css';

export default function Contact() {
	return (
		<div className="container mt-5">
            <h1  className="text-end px-5 mb-5 text-white py-3" id="contact">Contact Me</h1>
			<form className="row g-3">
				<div className="col-md-6">
					<label htmlFor="firstName" className="form-label">First Name</label>
					<input type="text" className="form-control" id="firstName" required></input>
				</div>
				<div className="col-md-6">
					<label htmlFor="lastName" className="form-label">Last Name</label>
					<input type="text" className="form-control" id="lastName" required></input>
				</div>
				<div className="col-md-8">
					<label htmlFor="emailInfo" className="form-label">E-mail</label>
					<input type="email" className="form-control" id="emailInfo" required></input>
				</div>
				<div className="col-md-4">
					<label htmlFor="phoneNumber" className="form-label">
						Phone Number
					</label>
					<input type="text" className="form-control" id="phoneNumber" placeholder="+1 (XXX) XXX-XXXX"></input>
				</div>
				<div className="col-md-12">
					<label htmlFor="comments" className="form-label">
						Comments, Questions?
					</label>
					<textarea className="form-control" id="comments" rows="3" required></textarea>
				</div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-success" id="submit">Submit</button>
                </div>
			</form>
			<p className='py-3'> Although this is one fine looking form, it is not fully functional at this time. Please use the email icon in the footer to contact me.</p>
		</div>
	);
}
