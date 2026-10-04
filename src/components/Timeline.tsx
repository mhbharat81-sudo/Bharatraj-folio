import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2026 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder, Zorix Agency</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: 'gray' }}>Digital Marketing & Web Development</h4>
            <p>
              Co-founded a digital marketing agency focused on content creation, social media marketing, influencer collaborations, paid advertising, SEO, and website development. Worked with clients to build digital presence and execute end-to-end marketing campaigns.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;