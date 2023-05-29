import React, { useState } from 'react';
import './Project.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { projectdata } from './ProjectAPI'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { Link } from 'react-router-dom';


const Project = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className='project-parent' id='project'>
            <h1>My Projects</h1>
            <VerticalTimeline >

                {
                    projectdata.map((item) => {
                        if (item.id <= 4) {
                            return (
                                <VerticalTimelineElement onMouseEnter={handleHover} onMouseLeave={handleHover}
                                    className="vertical-timeline-element--work"
                                    contentArrowStyle={{ borderRight: '7px solid  #FFFFFF' }}
                                    iconStyle={{ background: '#0E2A47', color: '#FFFFFF' }}
                                    icon={item.icon}
                                >
                                    <div className="card" >
                                        <img src={item.img} alt="Project 1" className="card-image" />
                                        <div className={`card-details ${isHovered ? 'show' : ''}`}>
                                            <h3 className="card-title" style={{
                                                color: "#97a6b4",
                                                fontSize: "25px",
                                                fontWeight: "400",
                                            }}>{item.name}</h3>
                                            <p className="card-description">{item.detail}</p>
                                            <div className='btn-parent'>
                                                <InfoOutlinedIcon disabled style={{
                                                    fontSize: "40px",
                                                    color: "#97a6b4",
                                                }} />
                                                <a href={item.url} target='_blank'>
                                                    <LinkOutlinedIcon style={{
                                                        fontSize: "40px",
                                                        color: "#97a6b4",
                                                    }} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </VerticalTimelineElement>
                            )
                        }
                    })
                }
            </VerticalTimeline>
            <Link to="/project" style={{
                textDecoration: "none",
            }}>
                <button className='show-btn'>Show More</button>
            </Link>
        </div>
    );
};

export default Project;
