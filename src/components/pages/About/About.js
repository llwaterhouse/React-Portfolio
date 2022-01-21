import React from 'react';
import './About.css';

export default function About() {
	return (
		<div className="container mt-5">
			<h1 className="text-end px-5 mb-5 bg-danger text-white py-3">About</h1>
			<div className="card text-center py-3">
				<div className="card-body">
					<section className="card-text">
						<p>
							Based in beautiful Hunterdon County NJ, I am a Full Stack Developer with Project Manager experience. I was previously a C/C++/Unix developer
							for over 15 years and I am excited to have updated my skills with the latest technologies.
						</p>
						<p>
							For over 10 years I've owned a Digital Marketing business, and have learned HTML and CSS
							along with other technologies to update my clients' websites. Owning a business requires
							wearing many hats, and I've broadened my experience in ways I never could have imagined. Keeping clients happy by being able to figure out what technologies would satisfy their needs, juggling many projects and tasks, and learning effective ways of connecting with people are some of the skills I've honed.
						</p>
						<p>
							Although I've enjoyed running my business, I look forward to working with a team on a
							project again. I find brainstorming to be invigorating and love seeing ideas develop when
							other people are involved. I have experience with Javascript, React, Java, algorithms
							and data structures. When someone gives me an assignment, they know I won't stop until
							I GET IT DONE.
						</p>
						<p>
							When I'm not learning new skills, coding or working, I spend time in nature which renews my
							spirit. Hiking, biking, kayaking are some of my favorite activities. I've also recently
							taken up pickleball which is a whole lot of fun.
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
						<h3>Technologies/Skills</h3>
						<li>Git</li>
						<li>Heroku</li>
						<li>Insomnia</li>
						<li>MySQL Workbench</li>
						<li>MongoDB Atlas</li>
						<li>Visual Studio Code, Eclipse, IntelliJ IDEA</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
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
