import React from 'react'
import './Resume.css'
import img from '../../images/photo1.png'

const Resume = () => {
  return (
    <div className='resume-parent'>
      <div className='resume-parent-child1'>
        <div>
          <img src={img} width="200px" />
        </div>
        <div>
          <h1>About me</h1>
          <p>I am a skilled frontend React JS developer with experience in creating user-friendly web applications with Responsive
            designs. I have a skills in frontend development, focusing on user experience and design. Additionally, I have
            knowledge of backend technologies like Node JS with Express JS and MongoDB. My experience has allowed me to
            develop a solid foundation in React JS development, and I am eager to continue learning and expanding my skill set. I
            am confident in my ability to contribute to a team and create high-quality web applications.
          </p>
        </div>
        <div>
          <h1>Education</h1>
          <h2>GCUF</h2>
          <h3>BS B-IT, Information Technology</h3>
          <h3>August 2022</h3>

          <h2>KIPS</h2>
          <h3>Fsc</h3>
          <h3>2018</h3>
        </div>

        <div>
          <h1>Certification</h1>
          <h2>Mern Stack Development</h2>
          <a href="https://drive.google.com/file/d/1yXhCrAadgoFVaXRsP0MPexl9Rws-rDri/view" target="_blank">link</a>
          <h2>Gamica Cloud</h2>
          <h2>TrippleByte Certificate</h2>
          <a href="https://triplebyte.com/tb/abdullahtayyab-fir7btd/certificate" target="_blank">link 2</a>
          <h2>TrippleByte</h2>
        </div>
      </div>
      <div className='resume-parent-child2'>
helo
      </div>
    </div>
  )
}

export default Resume