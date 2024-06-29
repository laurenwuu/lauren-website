// src/components/About.js
import React, { useState, useEffect} from 'react';
import './Profile.css';
import profilePic from '../assets/images/profile-pic.png';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github.png';

const About = () => {

    // Function to open the resume
    const resumeOpen = () => {
        window.open('/resume.pdf')
    };
    
     // Function to scroll to the contact section
     const scrollToContact = () => {
        window.history.pushState(null, '', '#contact'); //updates the URL in the browser's address bar to include #contact without causing a page refresh
        //document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    // Function to open linkedin
    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/lauren-wu-820186178/', '_blank', 'noopener,noreferrer')
        //_blank: Opens the URL in a new tab or window.
        //noopener,noreferrer: Security features that prevent the new window from being able to access the 
        //original window's JavaScript context (prevents certain types of attacks).

    };

    // Function to open Github
    const openGithub = () => {
        window.open('https://www.linkedin.com/in/lauren-wu-820186178/', '_blank', 'noopener,noreferrer')
        //_blank: Opens the URL in a new tab or window.
        //noopener,noreferrer: Security features that prevent the new window from being able to access the 
        //original window's JavaScript context (prevents certain types of attacks).

    };

    const [showLine1, setShowLine1] = useState(false);
    const [showLine2, setShowLine2] = useState(false);

    useEffect(() => {
        // Simulate typewriter effect
        const delay1 = setTimeout(() => setShowLine1(true), 500); // Show line 1 after 500ms
        const delay2 = setTimeout(() => setShowLine2(true), 1500); // Show line 2 after 1500ms

        // Clean up timeouts on component unmount or state change
        return () => {
            clearTimeout(delay1);
            clearTimeout(delay2);
        };
    }, []); // Run effect only once on component mount

    return (
        <section id="profile">
            <div className="section_pic-container">
                <img className="profilePicture" src={profilePic} alt="Lauren Wu"/>
            </div>
            <div className="section_text">
                <p className="section_text-p1">Hey, I'm</p>
                <h1 data-text="Lauren" className="title-name"></h1>
                <p className="section_text-p2">Software Engineer</p>
                <div className="btn-container">
                <button className="btn btn-colour-2" onClick={resumeOpen}>Download Resume</button>
                <button className="btn btn-colour-1" onClick={scrollToContact}>Contact Me</button>
                </div>
                <div className="socials-container">
                    <img 
                        className="icon"
                        src={linkedinIcon} 
                        alt="linkedin profile"
                        onClick={openLinkedin}
                    />
                    <img 
                        className="icon"
                        src={githubIcon} 
                        alt="github profile"
                        onClick={openGithub}
                    />
                </div>
            </div>
        </section>
    )
};

export default About;
