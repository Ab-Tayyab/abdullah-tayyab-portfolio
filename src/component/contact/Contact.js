import React, { useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from 'emailjs-com';
import './Contact.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_4vqv20g';
        const templateID = 'template_5rkr70p';
        const userID = 'f7sR6cOIBQETYiAk1';

        const form = e.target;

        emailjs
            .sendForm(serviceID, templateID, form, userID)
            .then((response) => {
                toast.success('Email sent successfully!', response);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                toast.error('Error sending email:', error);
            });
    };

    return (
        <div className="contact-container" id="contact">
            <div className='contact-child'>
                <h1>Contact Info</h1>
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
            <div>
                <h1>How can i help you</h1>
                <p>Fill out the form below and i will try to get back to you within 24h</p>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <input placeholder='Enter Your Name' type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <input placeholder='Enter your Email' type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <textarea placeholder='Type Your Message' name="message" value={formData.message} onChange={handleChange} required />
                    <button type="submit">Send a Message</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Form;