import React, { useState } from 'react';
import './Project.css';
import { projectdata } from './ProjectAPI'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { Link } from 'react-router-dom';


const Project = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className='project-main' >
            <h1 id='project'>My Projects</h1>
            <div className='project-parent'>
                {
                    projectdata.map((item) => {
                        return (
                            <div className="project-child"
                                data-aos="zoom-in-up"
                                data-aos-duration="3000"
                            >
                                <img src={item.img} alt="item view" className='project-img' width="100%" height="250px" />
                                <div className="project-overlay">
                                    <div className="project-text" >
                                        <h1 color="white">
                                            {item.name}
                                        </h1>
                                        <p>{item.detail}</p>
                                        <div>
                                            <a href={item.url} target='_blank'>
                                                <LinkOutlinedIcon style={{
                                                    fontSize: "40px",
                                                    color: "#97a6b4",
                                                }} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to="/project" style={{
                textDecoration: "none",
            }}>
                <button className='show-btn'>Show More</button>
            </Link>
        </div>
    );
};

export default Project;
