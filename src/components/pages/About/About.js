import React from 'react';
import banner from '../../../images/Hot-air-balloons-cropped.jpg'
import './About.css';

export default function About() {
    return (
        	<div class="container mt-5">
			<h1 className="text-end px-5 mb-5 bg-danger text-white py-3">About</h1>
            <img className="mx-auto py-e" src= {banner} width='100%' height='25%' alt='hotairballoons'></img>
            <div className="card text-center py-3">
      <div class="card-body">
    
        <p class="card-text">
        <p>Based in beautiful Hunterdon County NJ, I have recently completed a Rutgers University Coding Bootcamp to become a Full Stack
            Developer. I was previously a C/C++/Unix developer for over 15 years and I am excited to be learning the latest technologies. </p>
          <p>For the past 10 years I've owned a Digital Marketing business, and have learned HTML and CSS along with
            other technologies to update my clients' websites. Owning a business requires wearing many hats, and I've
            broadened my experience in ways I never could have imagined. </p>
          <p>Although I've enjoyed running my business, I look forward to working with a team on a project again. I find
            brainstorming to be invigorating and love seeing ideas get better when other people are involved. I've
            been taking courses in Java, Javascript, React, algorithms and data structures this past year. With the knowledge
            gained from Bootcamp, I am ready to apply myself to a project. When someone gives me an assignment, they
            know I won't stop until I GET IT DONE. </p>
          <p>When I'm not learning new skills, coding or working, I spend time in nature which renews my spirit. Hiking,
            biking, kayaking are some of my favorite activities. I've also recently taken up pickleball which is a whole
            lot of fun. </p>
        </p>
      </div>
    </div>
            <p className='px-5'>
          </p>
    </div>)
}