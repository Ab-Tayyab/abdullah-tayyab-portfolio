import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

const Fotter = () => {
    const handleScrollToTop = () => {
        scroll.scrollToTop({
            duration: 2000,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div style={{
            position: "relative",
            width: "100%",
            minHeight: "70px",
            background: "-webkit-linear-gradient(225deg, hsla(204, 69%, 8%, 1) 0%, hsla(198, 94%, 18%, 1) 50%, hsla(204, 69%, 8%, 1) 100%)",
            position: "relative",
        }}>
            <div >
                <h5 style={{
                    paddingTop: "30px",
                    color: "white",
                    textAlign: "center",
                }}>
                    COPYRIGHT© 2023 ABDULLAH TAYYAB ALL RIGHT RESERVED
                </h5>
            </div>
            <button
                onClick={handleScrollToTop}
                style={{
                    background: "#03405B",
                    color: "#FFFFFF",
                    position: "absolute",
                    top: -28,
                    right: 20,
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    transition: "background 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                    e.target.style.background = "#FFFFFF";
                    e.target.style.color = "#03405B";
                    e.target.style.border = "1px solid #03405B"
                }}
                onMouseLeave={(e) => {
                    e.target.style.background = "#03405B";
                    e.target.style.color = "#FFFFFF";
                }}
            >
                <ArrowUpwardOutlinedIcon style={{ fontSize: "30px" }} />
            </button>
        </div>
    )
}

export default Fotter