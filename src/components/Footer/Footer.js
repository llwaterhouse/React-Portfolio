import React from 'react';
import './Footer.css';

import github from '../../images/GitHub-Mark-120px-plus.png'
import linkedIn from '../../images/linkedin-sign.png'
import resume from '../../images/resumeimg.png'
import resumePDF from '../../images/2022-Linda-Lovero-Waterhouse-resume.pdf'
import overflow from '../../images/stackoverflow.png'
import email from '../../images/email.png'

export default function Footer() {
    return (
        <div className="footer  py-5">
            <div className = "d-flex justify-content-around">
            <a
                className="icon" target='_blank'
                href="https://github.com/llwaterhouse"
            >
                <img src={github} alt="Linda-Lovero-Waterhouse-Github" width='75' height='75' ></img>
            </a>
            <a
                className="icon" target='_blank'
                href="https://www.linkedin.com/in/lindalwaterhouse/"
            >
                <img src={linkedIn} alt="Linda-Waterhouse-LinkedIn" width='75' height='75' ></img>
            </a>        
            <a
                className="icon" target='_blank'
                href="https://stackoverflow.com/users/17100590/linda-lw"
            >
                <img src={overflow} alt="Linda-Waterhouse-StackOverflow" width='75' height='75'  ></img>
            </a>   
            <a
                className="icon" target='_blank'
                href="mailto:lindalw03@gmail.com"
            >
                <img src={email} alt="Linda-Waterhouse-email" width='75' height='75'  ></img>
            </a>         

            
             <a                
                className="icon" target='_blank'
                href={resumePDF} download
            >
            <img src={resume} alt="Linda Waterhouse Resume" width='75' height='75'/>
             </a>
            </div>

            <div className="text-center py-3">Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a
        href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>


        </div>
    )
}