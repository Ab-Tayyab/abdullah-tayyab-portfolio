import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { SkillApi } from './SkillAPI';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skill.css'
const Skill = () => {

    const [autoplay, setAutoplay] = useState(true);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current && sliderRef.current.slickNext) {
                sliderRef.current.slickNext();
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: autoplay,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='skill-parent'>
            <h1 className='skill-parent-heading'>
                What I Do?
            </h1>
            <div style={{ width: '94%' }}>
                <Slider {...settings}>
                    {SkillApi.map((item, i) => {
                        const { id, name, img } = item;
                        return (
                            <div className='skill-slider' key={id}>
                                <img className='slider-img' src={img} alt="Skill Image" />
                                <h1 className='slider-name'>
                                    {name}
                                    <div className='slider-line' >

                                    </div>
                                </h1>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Skill;
