// src/components/Projects.js
import React from 'react';
import './About.css';
import aboutPic from '../assets/images/about-pic.png';
import experienceIcon from '../assets/images/experience.png';
import educationIcon from '../assets/images/education.png';
import arrowIcon from '../assets/images/arrow.png';

const About = () => {

    // Function to scroll to Experience Section
    const scrollToExperience = () => {
        window.history.pushState(null, '', '#experience'); //updates the URL in the browser's address bar to include #contact without causing a page refresh
        //document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about">
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section_pic-container">
                    <img className="about-pic" src={aboutPic} alt="Lauren Wu"/>
                </div>
                <div className="about-details-container">
                    <div className="text-container">
                        <p>
                        Hi, I’m Lauren—a software developer who loves crafting applications in my spare time. 
                        I hold a Bachelor’s degree in Advanced Mathematics and Computer Science from the University of New South Wales. 
                        Outside of work, I enjoy brunch, reading, and playing the piano. My happiest moments come from creating and learning, 
                        which has sparked my recent but keen interest in frontend development!
                        </p>
                    </div>
                    <div className="about-containers">
                        <div className="details-container">
                            <h3>Skills</h3>
                            <p>2 years <br/> Software Development</p>
                        </div>
                    </div>
                </div>
            </div>
            <img 
                src={arrowIcon}
                alt="arrpw icon"
                className="icon"
                onClick={scrollToExperience}
            />
        </section>
    )
};

export default About;
