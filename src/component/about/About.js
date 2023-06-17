import React from 'react'
import CountUp from 'react-countup';
import './About.css'

const About = () => {

    const onDownloadResume = () => {
        const link = document.createElement("a");
        link.href = './abdullah tayyab resume.pdf';
        link.click();
    };
    const onDownloadCoverLetter = () => {
        const link = document.createElement("a");
        link.href = './abdullah tayyab cover letter.pdf';
        link.click();
    }
    return (
        <div id="about">
            <h1 className='about-heading'>Know Me More</h1>
            <div className='about-parent' >
                <div className='about-parent-child1'>
                    <h1 className='about-name' data-aos="fade-right" data-aos-duration="500">I'm <span>Abdullah Tayyab</span>, a Web Developer</h1>
                    <p className='detail' data-aos="fade-right" data-aos-duration="1500">I'm a MERN stack developer with six months of experience in front-end web development. I am skilled in HTML, CSS, JavaScript, React, npm libraries, and GitHub. I have worked with front-end frameworks like Bootstrap and MUI to create visually appealing and user-friendly interfaces. I have integrated APIs and third-party libraries into my projects to enhance functionality. Although my back-end development experience is limited, I have a basic understanding of web development principles, including working with databases like MongoDB and server-side languages like Node.js. I am a self-motivated individual with strong communication skills, capable of working both independently and collaboratively with teams and clients. I am dedicated to continuous learning and keeping right with the latest trends and technologies in front-end and back-end web development.</p>
                </div>
                <div className='about-parent-child2'>
                    <div>
                        <h2 className='about-child2-name' data-aos="fade-right" data-aos-duration="2000"><span>Name:</span>Abdullah Tayyab</h2>
                        <h2 className='about-child2-email' data-aos="fade-right" data-aos-duration="2000"><span>Email:</span>abdullahtayyab894@gmail.com</h2>
                        <div className='about-skill' data-aos="fade-right" data-aos-duration="2500">
                            <div>
                                <h2 className='about-child2-skill'>  <span>Skills:</span> </h2>
                            </div>
                            <div className='about-skill-child'>
                                <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>React JS</span> <span>Npm Libraries</span> <span>MUI</span> <span>BootStrap</span> <span>Git & GitHub</span>
                            </div>
                        </div>
                        <div className='about-experience' data-aos="fade-right" data-aos-duration="3000">
                            <div>
                                <h2>
                                    <CountUp end={6} duration={1} />+
                                </h2>
                                <h3>Months of Experiences</h3>
                            </div>
                            <div>
                                <h2>
                                    <CountUp end={10} duration={1} />+
                                </h2>
                                <h3>Projects Completed</h3>
                            </div>
                        </div>
                        <div className='about-btn'>
                            <button className='about-btn1' onClick={onDownloadResume}>Resume
                            </button>
                            <button className='about-btn2' onClick={onDownloadCoverLetter}>Cover Letter
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About