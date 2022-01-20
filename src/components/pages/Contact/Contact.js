import React from 'react';
import './Contact.css';

export default function Contact() {
	return (
		<div class="container mt-5">
            <h1  className="text-end px-5 mb-5 bg-success text-white py-3">Contact Me</h1>
			<form class="row g-3">
				<div class="col-md-6">
					<label for="firstName" class="form-label">First Name</label>
					<input type="text" class="form-control" id="firstName" required></input>
				</div>
				<div class="col-md-6">
					<label for="lastName" class="form-label">Last Name</label>
					<input type="text" class="form-control" id="lastName" required></input>
				</div>
				<div class="col-md-8">
					<label for="emailInfo" class="form-label">E-mail</label>
					<input type="email" class="form-control" id="emailInfo" required></input>
				</div>
				<div class="col-md-4">
					<label for="phoneNumber" class="form-label">
						Phone Number
					</label>
					<input type="text" class="form-control" id="phoneNumber" placeholder="+1 (XXX) XXX-XXXX"></input>
				</div>
				<div class="col-md-12">
					<label for="comments" class="form-label">
						Comments, Questions?
					</label>
					<textarea class="form-control" id="comments" rows="3" required></textarea>
				</div>
                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
			</form>
			<p className='py-3'> Although this is one fine looking form, it is not fully functional at this time. Please use the email icon in the footer to contact me.</p>
		</div>
	);
}
