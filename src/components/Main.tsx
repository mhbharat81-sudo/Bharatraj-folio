import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import DataObjectIcon from '@mui/icons-material/DataObject';
import Button from '@mui/material/Button';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* Floating Code Symbols */}
        <div className="floating-symbol symbol-1"><CodeIcon style={{ fontSize: '5rem' }} /></div>
        <div className="floating-symbol symbol-2"><TerminalIcon style={{ fontSize: '4.5rem' }} /></div>
        <div className="floating-symbol symbol-3"><DataObjectIcon style={{ fontSize: '6rem' }} /></div>

        <div className="image-wrapper">
          <img src="/profile.png" alt="Avatar" />
        </div>
        <div className="content">
          <h2 className="greeting-text">Hi, I'm Bharatraj</h2>
          <p className="location-text"><LocationOnIcon style={{ fontSize: '1em', verticalAlign: 'middle', color: '#ef4444', marginRight: '5px', marginBottom: '4px' }}/>Sirsi, India</p>
          <h1>Full Stack Developer <span className="multiply">&times;</span> Machine Learning Engineer</h1>

          <div className="button-group">
            <Button variant="outlined" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/bharatraj-mh-1b19153aa" target="_blank" className="main-btn outline-btn">
              LinkedIn
            </Button>
            <Button variant="outlined" startIcon={<GitHubIcon />} href="https://github.com/mhbharat81-sudo" target="_blank" className="main-btn outline-btn">
              GitHub
            </Button>
            <Button variant="outlined" startIcon={<EmailIcon />} href="mailto:mhbharat81@gmail.com" target="_blank" className="main-btn outline-btn">
              Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;