import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import './Footer.css'

const Fotter = () => {
    const handleScrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div className='footer' >
            <div >
                <h5>
                    COPYRIGHT© 2023 <span>ABDULLAH TAYYAB</span> ALL RIGHT RESERVED
                </h5>
            </div>
            <button className='footer-btn'
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