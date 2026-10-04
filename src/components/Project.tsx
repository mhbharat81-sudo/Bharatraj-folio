import itantraMock from '../assets/images/itantra.jpg';
import tranxlabMock from '../assets/images/tranxlab.png';
import talveraMock from '../assets/images/talvera.png';
import nulltraceMock from '../assets/images/nulltrace.png';
import medicalMock from '../assets/images/medical.png';
import '../assets/styles/Project.scss';
import FadeIn from './FadeIn';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <FadeIn delay={100} transitionDuration={800} direction="left">
                <div className="project">
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer">
                        <div className="zoom-wrapper">
                            <img src={talveraMock} className="zoom" alt="thumbnail" />
                        </div>
                    </a>
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer"><h2>Talvera</h2></a>
                    <p>An AI-powered career platform designed to empower students and professionals by providing AI resume building, mock interviews, and personalized job recommendations.</p>
                </div>
            </FadeIn>
            <FadeIn delay={200} transitionDuration={800} direction="right">
                <div className="project">
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer">
                        <div className="zoom-wrapper">
                            <img src={itantraMock} className="zoom" alt="thumbnail" />
                        </div>
                    </a>
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer"><h2>iTantra - Offline Multilingual Emergency Communication (SIH 2026)</h2></a>
                    <p>Developed an offline P2P communication system with multi-hop mesh and store-and-forward routing, integrating on-device multilingual STT, translation and TTS for low-bandwidth voice communication across 10 Indian languages. Features encrypted messaging, SOS priority alerts, ACKs and replay protection, and optimized AI inference using VAD, quantization and on-demand model loading for low-resource devices.</p>
                </div>
            </FadeIn>
            <FadeIn delay={100} transitionDuration={800} direction="left">
                <div className="project">
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer">
                        <div className="zoom-wrapper">
                            <img src={nulltraceMock} className="zoom" alt="thumbnail" />
                        </div>
                    </a>
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer"><h2>NullTrace - AI-Powered Cybersecurity Platform</h2></a>
                    <p>Developed an AI-powered cybersecurity platform to detect phishing attacks, spam, fake jobs, malicious URLs, and online scams, with modules for URL scanning, email analysis, OTP scam protection, screenshot OCR scanning, and an interactive threat dashboard.</p>
                </div>
            </FadeIn>
            <FadeIn delay={200} transitionDuration={800} direction="right">
                <div className="project">
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer">
                        <div className="zoom-wrapper">
                            <img src={medicalMock} className="zoom" alt="thumbnail" />
                        </div>
                    </a>
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer"><h2>AI Medical Imaging Diagnosis Platform</h2></a>
                    <p>Developed an AI-powered medical imaging platform for automated disease diagnosis, training a deep learning model and integrating it into a web application to provide diagnosis with confidence scores.</p>
                </div>
            </FadeIn>
            <FadeIn delay={100} transitionDuration={800} direction="left">
                <div className="project">
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer">
                        <div className="zoom-wrapper">
                            <img src={tranxlabMock} className="zoom" alt="thumbnail" />
                        </div>
                    </a>
                    <a href="https://github.com/mhbharat81-sudo" target="_blank" rel="noreferrer"><h2>TranxLab - Financial Dashboard</h2></a>
                    <p>Designed and developed a comprehensive personal finance application to track expenses, analyze spending trends, and build a better financial future. Features include interactive charts for Income vs Expenses, customizable monthly budgets, savings goals, and recent transaction monitoring.</p>
                </div>
            </FadeIn>
        </div>
    </div>
    );
}

export default Project;