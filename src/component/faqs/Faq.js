
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {faqData} from './FaqApi'
import './Faq.css';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <h1 style={{
                textAlign:"center",
                paddingBottom:"10px",
                color:"#03405B"
            }}>Frequently Asked Question</h1>
            {faqData.map((faq, index) => (
                <div key={index} className="accordion-item">
                    <div
                        className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {faq.question}
                        <FontAwesomeIcon
                            icon={activeIndex === index ? faChevronUp : faChevronDown}
                            className="accordion-icon"
                        />
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq;
