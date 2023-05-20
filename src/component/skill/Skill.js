
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
                            if (item.id % 2 !== 0) {

                                return (
                                    <Slide left>
                                        <div className='skill-slider skill-slider-clr' key={item.id}>
                                            <img className='slider-img' src={item.img} alt="Skill Image" />
                                            <h1 className='slider-name skill-slider-clr'>
                                                {item.name}
                                                <div className='slider-line skill-slider-clr' >

                                                </div>
                                            </h1>
                                        </div>
                                    </Slide>
                                )
                            }
                            else {
                                return (
                                    <Slide right>
                                        <div className='skill-slider skill-slider-clr' key={item.id}>
                                            <img className='slider-img' src={item.img} alt="Skill Image" />
                                            <h1 className='slider-name skill-slider-clr'>
                                                {item.name}
                                                <div className='slider-line skill-slider-clr' >

                                                </div>
                                            </h1>
                                        </div>
                                    </Slide>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skill