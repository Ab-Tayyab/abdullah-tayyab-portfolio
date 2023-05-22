
import React from 'react'
import './Skill.css'
import { SkillApi } from './SkillAPI'
import Slide from 'react-reveal/Slide';

const Skill = () => {
    return (
        <>
            <h1 className='skill-parent-heading'>My Skills</h1>
            <div className='skill-parent'>
                <div>
                    {
                        SkillApi.map((item) => {
                            return (
                                <div className='skill-slider skill-slider-clr' key={item.id} data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000">
                                    <img className='slider-img' src={item.img} alt="Skill Image" />
                                    <h1 className='slider-name skill-slider-clr'>
                                        {item.name}
                                        <div className='slider-line skill-slider-clr' >

                                        </div>
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skill