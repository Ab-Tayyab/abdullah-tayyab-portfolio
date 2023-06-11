import React from 'react'
import photo from '../../images/photo2.png'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import './Home.css'

const Home = () => {
    return (
        <div className="home-parent" id="home">
            <div className="home-parent-child1"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3000"
            >
                <div className="home-parent-child1-subchild">
                    <div className="home-parent-child1-subchild1" >
                        <img src={photo} />
                    </div>
                </div>
            </div>
            <div>
                <div className="home-parent-child2">
                    <div className="home-parent-child2-subchild" >
                        <h3 data-aos="fade-down" data-aos-duration="3000">I'm Abdullah Tayyab</h3>
                        <p data-aos="fade-down" data-aos-duration="3000">React Js Developer</p>
                        <p data-aos="fade-up" data-aos-duration="3000">I am confident in my ability to create visually appealing and user-friendly interfaces. Although I have also experience with back-end.</p>
                    </div>
                </div>
                <div className='home-contact' data-aos="fade-up" data-aos-duration="3000">
                    <a className='social-link social-icone' href="https://wa.me/+923085630574" target="_black">
                        Say Hello!
                        <PhoneInTalkIcon className="contact-icone" /></a>
                </div>
            </div>
        </div>
    )
}

export default Home