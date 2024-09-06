import React from 'react';
import './Project.css';
import { projectdata } from './ProjectAPI'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';


const Project = () => {

    return (
        <div className='project-main' id='project' >
            <h1>My Projects</h1>
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
                                            <a href={item.url} target='_blank' rel="noreferrer">
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
        </div>
    );
};

export default Project;
