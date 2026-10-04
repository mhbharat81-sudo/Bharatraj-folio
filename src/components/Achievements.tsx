import React from "react";
import '../assets/styles/Achievements.scss';
import FadeIn from './FadeIn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const achievementsList = [
    {
        place: "1st Place",
        title: "HackArena 1.0",
        description: "Secured 1st place nationwide building high-impact full-stack and AI solutions under competitive 24-hour sprint.",
        badgeColor: "#fff4e5",
        badgeTextColor: "#f39c12"
    },
    {
        place: "3rd Place",
        title: "HackFest 1.0 — National Level",
        description: "Recognized at Shivamogga National Level Hackathon for outstanding system architecture and rapid deployment.",
        badgeColor: "#e0f7fa",
        badgeTextColor: "#00acc1"
    },
    {
        place: "4th Place",
        title: "MedhaDrishti AI National Hackathon",
        description: "Built computer vision & multimodal AI pipelines competing against top AI engineering teams across India.",
        badgeColor: "#f3e5f5",
        badgeTextColor: "#8e24aa"
    },
    {
        place: "4th Place",
        title: "Hack Genesis 2026",
        description: "Recognized at the IEEE Student Branch hackathon hosted by KLE Technological University.",
        badgeColor: "#f3e5f5",
        badgeTextColor: "#8e24aa"
    },
    {
        place: "Top 10",
        title: "Build Bengaluru Hackathon",
        description: "Placed in the top 10 at the highly competitive hackathon hosted at Microsoft Office, Bengaluru.",
        badgeColor: "#f1f8e9",
        badgeTextColor: "#558b2f"
    },
    {
        place: "Participant",
        title: "SIH Internal Hackathon",
        description: "Represented and competed at Bapuji Institute of Engineering & Technology, Davanagere.",
        badgeColor: "#eceff1",
        badgeTextColor: "#455a64"
    }
];

function Achievements() {
    return(
        <div className="achievements-container" id="achievements">
            <h1>Achievements</h1>
            <div className="achievements-grid">
                {achievementsList.map((achievement, index) => (
                    <FadeIn key={index} delay={100} transitionDuration={800} direction={index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up"}>
                        <div className="achievement-card">
                            <div className="achievement-badge" style={{ backgroundColor: achievement.badgeColor, color: achievement.badgeTextColor, border: `1px solid ${achievement.badgeTextColor}40` }}>
                                <EmojiEventsIcon fontSize="small" style={{ marginRight: '5px' }} />
                                {achievement.place}
                            </div>
                            <h2>{achievement.title}</h2>
                            <p>{achievement.description}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
