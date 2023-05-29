import React from 'react'
import photo from '../../images/photo2.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

import './Home.css'

const Home = () => {
    return (
        <div className="home-parent">
            <div className="home-parent-child1" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <div className="home-parent-child1-subchild">
                    <div className="home-parent-child1-subchild1" >
                        <img src={photo} />
                        <h1 >Abdullah</h1>
                        <h1 >Tayyab</h1>
                        <hr />
                        <p>React JS Developer</p>
                    </div>
                    <div className="home-parent-child1-subchild2">
                        <a href="https://www.facebook.com/this.abdullah.8/" target="_black"><FacebookOutlinedIcon /></a>
                        <a href="https://github.com/AbdullahTayyab894" target="_black"><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/in/abdullahtayyab894/" target="_black"><LinkedInIcon /></a>
                        <a href="https://wa.me/+923184579618" target="_black"><WhatsAppIcon /></a>
                    </div>
                </div>
            </div>
            <div>
                <div className="home-parent-child2" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className="home-parent-child2-subchild" >
                        < h1>Hello</h1>
                        <h3>Here's who I am & what I do</h3>
                        <p > Hay! I am ABDULLAH TAYYAB and i'm React JS DeveloperI am confident in my ability to create visually appealing and user-friendly interfaces.</p>
                        <p> Although I have also experience with back-end development, I am eager to learn and grow my skills in this area.</p>
                    </div>
                </div>
                <div className='home-contact' data-aos="zoom-in-up">
                    <a className='social-link social-icone' href="https://wa.me/+923184579618" target="_black">
                        Say Hello!
                        <PhoneInTalkIcon className="contact-icone" /></a>
                </div>
            </div>
        </div>
    )
}

export default Home