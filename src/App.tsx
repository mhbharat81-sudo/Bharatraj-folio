import React, {useState, useEffect} from "react";
import {
  Main,
  About,
  Timeline,
  Expertise,
  Project,
  Achievements,
  Contact,
  Navigation,
} from "./components";

import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <div className="content-wrapper">
            <Main/>
            <About/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Achievements/>
            <Contact/>
        </div>
    </div>
    );
}

export default App;