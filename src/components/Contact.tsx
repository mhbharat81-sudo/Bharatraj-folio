import React from 'react';
import '../assets/styles/Contact.scss';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FadeIn from './FadeIn';

function Contact() {
  const copyEmail = () => {
    navigator.clipboard.writeText("mhbharat81@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <div id="contact" className="contact-section">
      <FadeIn delay={200} transitionDuration={1000} direction="up">
        <div className="contact-content">
          <h3 className="contact-subtitle">Contact</h3>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-description">
            Have questions? Ping me with a <a href="https://www.linkedin.com/in/bharatraj-mh-1b19153aa" target="_blank" rel="noreferrer">LinkedIn</a> message or email at <a href="mailto:mhbharat81@gmail.com">mhbharat81@gmail.com</a>.
          </p>
          
          <div className="contact-buttons">
            <button className="btn copy-email-btn" onClick={copyEmail}>
              <ContentCopyIcon fontSize="small" /> Copy Email
            </button>
            <a href="https://www.linkedin.com/in/bharatraj-mh-1b19153aa" target="_blank" rel="noreferrer" className="btn linkedin-btn">
              <LinkedInIcon fontSize="small" /> Connect on LinkedIn
            </a>
            <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer" className="btn github-btn">
              <GitHubIcon fontSize="small" /> GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Contact;