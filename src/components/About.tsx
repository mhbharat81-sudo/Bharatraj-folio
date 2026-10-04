import React from "react";
import '../assets/styles/About.scss';

function About() {
    return (
    <div className="container" id="about">
        <div className="about-section-new">
            <h1 className="about-title">About Me</h1>
            <div className="bio-content">
                <p className="bio-text">
                    I'm <span className="highlight">Bharatraj M H</span>, a <span className="highlight">Computer Science Engineering student</span> passionate about <span className="highlight">Artificial Intelligence</span>, <span className="highlight">Cybersecurity</span>, and <span className="highlight">Full-Stack Development</span>. I enjoy building innovative solutions that solve real-world problems through technology. 
                </p>
                <p className="bio-text">
                    Alongside development, I am a <span className="highlight">Tech Content Creator</span> who shares insights on AI tools, hackathons, software development, and emerging technologies to help students and developers learn and grow. As a hackathon enthusiast and <span className="highlight">Co-Founder of Zorix Agency</span>, I continuously explore new technologies, create impactful projects, and turn ideas into scalable products.
                </p>
            </div>
        </div>
    </div>
    );
}

export default About;
