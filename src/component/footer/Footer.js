import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css'

const Fotter = () => {
    const handleScrollToTop = () => {
        scroll.scrollToTop({
            duration: 2000,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div className='footer' >
            <div >
                <div style={{
                    width: "60px",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "auto"
                }}>
                    <a className='social-link' href="https://www.linkedin.com/in/abdullahtayyab894/" target="_black"><LinkedInIcon /></a>
                    <a className='social-link' href="https://wa.me/+923184579618" target="_black"><WhatsAppIcon /></a>
                </div>
                <h5 style={{
                    color: "#97a6b4",
                    textAlign: "center",
                    alignItems: "center"
                }}>
                    COPYRIGHT© 2023 ABDULLAH TAYYAB ALL RIGHT RESERVED
                </h5>
            </div>
            <button
                onClick={handleScrollToTop}
                style={{
                    position: "absolute",
                    top: 5,
                    right: 20,
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    color: "#97a6b4",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(5px)",
                }}
            >
                <ArrowUpwardOutlinedIcon style={{
                    fontSize: "30px"
                }} />
            </button>
        </div >
    )
}

export default Fotter