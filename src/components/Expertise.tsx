import React from "react";
import '../assets/styles/Expertise.scss';
import FadeIn from './FadeIn';

const skillCategories = [
  {
    title: "🛡️ CYBERSECURITY",
    skills: [
      { name: "Splunk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/splunk/splunk-original.svg" },
      { name: "Sentinel", icon: "🛡️" },
      { name: "QRadar", icon: "🔍" },
      { name: "Wazuh", icon: "🐺" },
      { name: "Wireshark", icon: "🦈" },
      { name: "Nmap", icon: "👁️‍🗨️" },
      { name: "Burp Suite", icon: "🕷️" },
      { name: "OWASP ZAP", icon: "⚡" },
      { name: "Metasploit", icon: "🎯" },
      { name: "Kali Linux", icon: "🐉" },
      { name: "Nessus", icon: "📡" }
    ]
  },
  {
    title: "☁️ CLOUD & DEVOPS",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
    ]
  },
  {
    title: "🤖 AI & MACHINE LEARNING",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Gemini API", icon: "✨" },
      { name: "Deep Learning", icon: "🧠" },
      { name: "Prompt Eng", icon: "💬" }
    ]
  },
  {
    title: "💻 PROGRAMMING LANGUAGES",
    skills: [
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ]
  },
  {
    title: "🌐 WEB DEVELOPMENT",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ]
  },
  {
    title: "🗄️ DATABASES",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "Supabase", icon: "https://supabase.com/dashboard/img/supabase-logo.svg" }
    ]
  },
  {
    title: "🎨 DIGITAL MARKETING & OTHERS",
    skills: [
      { name: "Content Creation", icon: "🎥" },
      { name: "SEO", icon: "🔍" },
      { name: "Entrepreneurship", icon: "🚀" },
      { name: "Leadership", icon: "👑" },
      { name: "Problem Solving", icon: "🧩" }
    ]
  }
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-categories">
                {skillCategories.map((category, index) => (
                    <FadeIn key={index} delay={100} transitionDuration={700} direction={index % 2 === 0 ? "left" : "right"}>
                        <div className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skill-badges">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className="skill-badge">
                                        {skill.icon.startsWith('http') ? (
                                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                        ) : (
                                            <span className="skill-emoji">{skill.icon}</span>
                                        )}
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;