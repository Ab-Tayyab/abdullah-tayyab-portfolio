import React, { useState } from 'react';
import './Project.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { projectdata } from './ProjectAPI'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';


const AllProject = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className='allproject-parent'>
            <h1 style={{
                color: "#97a6b4",
                textAlign: "center",
                padding: "20px 0px"
            }}>My Projects</h1>
            <VerticalTimeline lineColor="#03405B" >
                {
                    projectdata.map((item) => {
                        return (
                            <VerticalTimelineElement onMouseEnter={handleHover} onMouseLeave={handleHover}
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#0E2A47', color: '#FFFFFF' }}
                                contentArrowStyle={{ borderRight: '7px solid  #0E2A47' }}
                                iconStyle={{ background: '#0E2A47', color: '#fff' }}
                                icon={item.icon}
                            >
                                <div className="card" >
                                    <img src={item.img} alt="Project 1" className="card-image" />
                                    <div className={`allcard-details ${isHovered ? 'show' : ''}`}>
                                        <h3 className="card-title">{item.name}</h3>
                                        <p className="card-description">{item.detail}</p>
                                        <div className='btn-parent'>
                                                <InfoOutlinedIcon style={{
                                                    fontSize: "40px",
                                                    color: "#FFFFFF",
                                                }} />
                                            <a href={item.url} target='_blank'>
                                                <LinkOutlinedIcon style={{
                                                    fontSize: "40px",
                                                    color: "#FFFFFF",
                                                }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div >
    );
};

export default AllProject;
