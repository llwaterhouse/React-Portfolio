import React from 'react';
import banner from '../../../images/Hot-air-balloons-cropped.jpg'
import './About.css';

export default function About() {
    return (
        	<div class="container mt-5">
			<h1 className="text-end px-5 mb-5 bg-danger text-white py-3">About</h1>
            <img className="mx-auto" src= {banner} width='100%' height='25%' alt='hotairballoons'></img>
      <p className='px-5'>
          </p>
    </div>)
}