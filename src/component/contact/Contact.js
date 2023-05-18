import React, { useState } from 'react';
import './Contact.css';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [purpose, setPurpose] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handlePurposeChange = (e) => {
        setPurpose(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Form submitted:', { name, email, message, purpose });
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
        setPurpose('');
    };

    return (
        <div className="form-container">
            <h2>Contact Form</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="purpose"
                        placeholder="Purpose of Contacting"
                        value={purpose}
                        onChange={handlePurposeChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={message}
                        onChange={handleMessageChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
