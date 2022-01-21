import React from 'react';
// import banner from '../../../images/Hot-air-balloons-cropped.jpg';
import './About.css';

export default function About() {
	return (
		<div className="container mt-5">
			<h1 className="text-end px-5 mb-5 bg-danger text-white py-3">About</h1>
			{/* <img className="mx-auto py-e" src={banner} width="100%" height="25%" alt="hotairballoons" /> */}
			<div className="card text-center py-3">
				<div className="card-body">
					<section className="card-text">
						<p>
							Based in beautiful Hunterdon County NJ, I have recently completed a Rutgers University
							Coding Bootcamp to become a Full Stack Developer. I was previously a C/C++/Unix developer
							for over 15 years and I am excited to be learning the latest technologies.{' '}
						</p>
						<p>
							For the past 10 years I've owned a Digital Marketing business, and have learned HTML and CSS
							along with other technologies to update my clients' websites. Owning a business requires
							wearing many hats, and I've broadened my experience in ways I never could have imagined.{' '}
						</p>
						<p>
							Although I've enjoyed running my business, I look forward to working with a team on a
							project again. I find brainstorming to be invigorating and love seeing ideas get better when
							other people are involved. I've been taking courses in Java, Javascript, React, algorithms
							and data structures this past year. With the knowledge gained from Bootcamp, I am ready to
							apply myself to a project. When someone gives me an assignment, they know I won't stop until
							I GET IT DONE.{' '}
						</p>
						<p>
							When I'm not learning new skills, coding or working, I spend time in nature which renews my
							spirit. Hiking, biking, kayaking are some of my favorite activities. I've also recently
							taken up pickleball which is a whole lot of fun.{' '}
						</p>
					</section>
				</div>
			</div>
			<div className="skills">
				<div className="lists">
					<ul>
						<h3>Front-End Proficiencies</h3>
						<li>JavaScript</li>
						<li>jQuery</li>
						<li>React.js</li>
						<li>Bootstrap</li>
						<li>CSS</li>
						<li>HTML</li>
						<li>Local &amp; Session Storage</li>
					</ul>
					<ul>
						<h3>Technologies</h3>
						<li>Git</li>
						<li>Heroku</li>
						<li>Insomnia</li>
						<li>MySQL Workbench</li>
						<li>MongoDB Atlas</li>
						<li>Visual Studio Code</li>
					</ul>
					<ul>
						<h3>Back-End Proficiencies</h3>
						<li>API's</li>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>GraphQL</li>
						<li>MySQL, Sequelize</li>
						<li>MongoDB, Mongoose</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
