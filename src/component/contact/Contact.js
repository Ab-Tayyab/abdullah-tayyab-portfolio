import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Contact.css';

const Form = () => {


    return (
        <div className="contact-container" id="contact">
            <div className='contact-child'>
                <h1>Contact Me</h1>
                <h2>Let's make something amazing together.
                </h2>
                <h2>
                    Just wanted to say hi, request my resume, or discuss the potential for an incredible partnership. Looking forward to hearing from you!
                </h2>
                <div className='contact-link'>
                    <a className='social-link' href="https://www.facebook.com/this.abdullah.8/" target="_black" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="500"><FacebookOutlinedIcon /></a>
                    <a className='social-link' href="https://github.com/AbdullahTayyab894" target="_black" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000"><GitHubIcon /></a>
                    <a className='social-link' href="https://www.linkedin.com/in/abdullahtayyab894/" target="_black" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1500"><LinkedInIcon /></a>
                    <a className='social-link' href="https://wa.me/+923184579618" target="_black" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="2000"><WhatsAppIcon /></a>
                </div>
            </div>
        </div>
    );
};

export default Form;
