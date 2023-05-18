import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import photo from "../../images/photo1.png"
import './About.css'

const About = () => {
    return (
        <>
            <div className='about-parent'>
                <div className='about-parent-child1'>
                    <img src={photo} alt="Personal Photo" />
                </div>
                <div className='about-parent-child2'>
                    <h1 >About Me</h1>
                    <p className='detail'> Hay! I am ABDULLAH TAYYAB and i'm Mern Stack Developer  with six months of experience in front-end web development, I am confident in my ability to create visually appealing and user-friendly interfaces. Although I have limited experience with back-end development, I am eager to learn and grow my skills in this area.During my time as a Front End Web Developer, I have gained hands-on experience with HTML, CSS, JavaScript, react, npm libraries and git-hub and various front-end frameworks such as Bootstrap, MUI. I am responsible for building responsive and \ninteractive user interfaces that provide an exceptional user experience. I have also used APIs and integrated third-party libraries into my projects.While my experience with back-end development is limited, I have a basic understanding of web development principles, and I have worked with databases such as MongoDB. I am familiar with server-side languages such as Node.js and I have experience working with APIs and JSON data.I am self-motivated, and I enjoy working independently. I have excellent communication skills, and I am able to work effectively with teams and  clients. I am committed to continuous learning and staying up-to-date with the latest trends and technologies in  both front-end and back-end web development. </p>

                </div>
            </div>
        </>
    )
}

export default About