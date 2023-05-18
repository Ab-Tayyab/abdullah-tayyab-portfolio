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
        <div className='project-parent'>
            <h1 style={{
                color: "#FFFFFF",
                textAlign: "center",
                padding: "20px 0px"
            }}>My Projects</h1>
            <VerticalTimeline >

                {
                    projectdata.map((item) => {
                        if (item.id <= 4) {
                            return (
                                <VerticalTimelineElement onMouseEnter={handleHover} onMouseLeave={handleHover}
                                    className="vertical-timeline-element--work"
                                    contentArrowStyle={{ borderRight: '7px solid  #FFFFFF' }}
                                    iconStyle={{ background: '#03405B', color: '#fff' }}
                                    icon={item.icon}
                                >
                                    <div className="card" >
                                        <img src={item.img} alt="Project 1" className="card-image" />
                                        <div className={`card-details ${isHovered ? 'show' : ''}`}>
                                            <h3 className="card-title">{item.name}</h3>
                                            <p className="card-description">{item.detail}</p>
                                            <div className='btn-parent'>
                                                <button className='detail-btn'><InfoOutlinedIcon style={{
                                                    fontSize: "40px"
                                                }} /></button>
                                                <a href={item.url} target='_blank'>
                                                    <button className='next-btn'><LinkOutlinedIcon style={{
                                                        fontSize: "40px"
                                                    }} /></button>
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
                textDecoration:"none",
            }}>
                <button className='show-btn'>Show More</button>
            </Link>
        </div>
    );
};

export default Project;
