import React from 'react';
import './Projects.css';
import Barker from '../../../images/Barker-homepage-cropped.png';
import Food from '../../../images/Food-for-days.PNG';
import Weather from '../../../images/Five-day-forecast-cropped.png';
import Note from '../../../images/Home-page-of-Note-taker.PNG'
import Work from '../../../images/Work-Day-Planner.png'

export default function Projects() {
	return (
		<div className="container mt-5">
			<h1 className="text-end px-5 mb-5 bg-secondary text-white py-3">Projects</h1>
			<div className="row card-group py-3">
				<div className="col-sm-6">
					<div className="card">
						<img className="card-img-top" src={Barker} alt="Barker" height="75%" />
						<div className="card-body d-flex justify-content-around">
							<a href="https://stevekoutsodontis.github.io/Barker/" className="btn btn-secondary">
								Deployed
							</a>
							<a href="https://github.com/SteveKoutsodontis/Barker" className="btn btn-secondary">
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card">
						<img className="card-img-top" src={Weather} alt="Weather Dashboard" />
						<div className="card-body d-flex justify-content-around">
							<a href="https://llwaterhouse.github.io/Weather-Dashboard/" className="btn btn-secondary">
								Deployed
							</a>
							<a href="https://github.com/llwaterhouse/Weather-Dashboard/" className="btn btn-secondary">
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row py-3">
				<div className="col-sm-6">
					<div className="card border-secondary ">
						<img className="card-img-top" src={Food} alt="Food-For-Days" />
						<div className="card-body d-flex justify-content-around">
							<a href="https://food-for-days.herokuapp.com/" className="btn btn-secondary">
								Deployed
							</a>
							<a href="https://github.com/quynhndinh/Food-For-Days" className="btn btn-secondary">
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card">
						<img className="card-img-top" src={Note} alt="Notetaker" />
						<div className="card-body d-flex justify-content-around">
							<a href="https://notetaker-powered-by-express.herokuapp.com/" className="btn btn-secondary">
								Deployed
							</a>
							<a href="https://github.com/llwaterhouse/NoteTaker-Powered-by-Express" className="btn btn-secondary">
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="card">
						<img className="card-img-top" src={Work} alt="Work Day Planner" />
						<div className="card-body d-flex justify-content-around">
							<a href="https://llwaterhouse.github.io/Work-Day-Planner/" className="btn btn-secondary">
								Deployed
							</a>
							<a href="https://github.com/llwaterhouse/Work-Day-Planner" className="btn btn-secondary">
								GitHub
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="card">
						<img className="card-img-top" src={Barker} alt="Barker" />
						<div className="card-body d-flex justify-content-around">
							<a href="https://stevekoutsodontis.github.io/Barker/" className="btn btn-secondary">
								Deployed
							</a>
							<a href="https://github.com/SteveKoutsodontis/Barker" className="btn btn-secondary">
								GitHub
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
