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
                        Hi, I’m Lauren—a <span className="bold-keyword">software developer</span> who loves crafting applications in my spare time. 
                        I hold a Bachelor’s degree in <span className="bold-keyword">Advanced Mathematics</span> and <span className="bold-keyword">Computer Science</span> from the University of New South Wales. 
                        Outside of work, I enjoy brunch, reading, and playing the piano. My happiest moments come from <span className="bold-keyword">creating</span> and <span className="bold-keyword">learning</span>, 
                        which has sparked my recent but keen interest in <span className="bold-keyword">frontend development</span>!
                    </p>
                    </div>
                    <div className="about-containers">
                        <div className="details-container">
                            <h3>Skills & Technologies</h3>
                            <ul>
                                <li>Java</li>
                                <li>React.js</li>
                                <li>HTML and CSS</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>Python</li>
                            </ul>
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
