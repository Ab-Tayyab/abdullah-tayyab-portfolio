import React from 'react'
import './Resume.css'
import img from '../../images/photo2.png'
import { styled } from '@mui/material/styles';
import { ResumeSkillData } from './ResumeSkillApi'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import LinkIcon from '@mui/icons-material/Link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#97a6b4' : '#308fe8',
  },
}));
const Resume = () => {
  return (
    <div className='resume' id="resume">
      <div className='resume-parent'>
        <div className='resume-parent-child1'>
          <div>
            <img src={img} width="250px" style={{
              display: "flex",
              margin: "auto",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% "
            }} />
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
            <h1>Skill</h1>
            <div>
              <div style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                width: "100%",
                marginBottom: "30px",
              }}>
                {
                  ResumeSkillData.map((item) => {
                    return (
                      <div style={{
                        width: "450px",
                      }}>
                        <div style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}>
                          <h2>{item.name}</h2>
                          <h2>{item.percentage}</h2>
                        </div>
                        <BorderLinearProgress variant="determinate" value={item.value} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='education'>
            <h1>Education</h1>
            <div>
              <div>
                <h3>GCUF</h3>
                <h3>August 2022</h3>
              </div>
              <h2>BS B-IT, Information Technology</h2>
            </div>
            <div>
              <div>
                <h3>KIPS</h3>
                <h3>2018</h3>
              </div>
              <h2>Fsc</h2>
            </div>
          </div>

          <div className='certificate'>
            <h1>Certification</h1>
            <div>
              <h3>Mern Stack Development at Gamica Cloud</h3>
              <a href="https://drive.google.com/file/d/1yXhCrAadgoFVaXRsP0MPexl9Rws-rDri/view" target="_blank"><LinkIcon style={{
                color: "#FFFFFF",
                "&:hover": {
                  color: "#03405B"
                }
              }} /></a>
            </div>
            <div>
              <h3>TrippleByte Certificate</h3>
              <a href="https://triplebyte.com/tb/abdullahtayyab-fir7btd/certificate" target="_blank"><LinkIcon style={{
                color: "#FFFFFF",
                "&:hover": {
                  color: "#03405B"
                }
              }} /></a>
            </div>
          </div>
        </div>
        <div className='resume-parent-child2'>
          <div>
            <h4 className='resume-name'>Abdullah Tayyab</h4>
            <h4 className='resume-job'>React JS Developer</h4>
          </div>
          <div >
            <h1>Contact</h1>
            <div className='resume-contact'>
              <div>
                <PhoneIcon />
                <h2>03085630574</h2>
              </div>
              <div>
                <EmailIcon />
                <h2>abdullahtayyab894@gmail.com</h2>
              </div>
              <div>
                <LinkedInIcon />
                <a href="https://www.linkedin.com/in/abdullahtayyab894/">linkedIn</a>
              </div>
              <div>
                <GitHubIcon />
                <a href="https://www.linkedin.com/in/abdullahtayyab894/">GitHub</a>
              </div>
            </div>
          </div>
          <div className='resume-experience'>
            <h1>Experience</h1>
            <div>
              <h5>TechLift, PASHA & PSEB | Lahore, Pakistan | Jan 2023 – Mar 2023</h5>
              <h6>Position: MERN Stack BootCamp</h6>
              <li>Create an Ecommerce Site using React-JS, Redux & Bootstrap</li>
              <li>Create backend using Node JS with Express-JS and MongoDB</li>
            </div>

            <div>
              <h5>Gamica Cloud | Faisalabad, Pakistan Aug 2022 - Dec 2022</h5>
              <h6>ReactJS Intern</h6>
              <p>My experience at Gamica Cloud has allowed me to develop my skills as a React-JS developer
                and to work on a variety of exciting projects which is mentioned in project section.</p>
            </div>
          </div>
          <div className='resume-project'>
            <h1>Projects</h1>
            <div >
              <h5>Ecommerce Site</h5>
              <h6>Tools: Mern Stack Technology, Bootstrap</h6>
              <p>Developed an e-commerce website using React JS with a backend built with Node.js,
                Express.js, and MongoDB. Features include:</p>
              <li>User authentication and authorization</li>
              <li>Product catalog with categories and search functionality</li>
              <li> Shopping cart and checkout process</li>
            </div>

            <div>
              <h5>Expense Tracker App</h5>
              <h6>Tools: React JS, ContextAPI, MUI</h6>
              <p>Built an expense tracker application using React JS that allows users to track their expenses
                and manage their finances. Features include:</p>
              <li>Add, edit, and delete expenses</li>
            </div>

            <div>
              <h5>Quiz App</h5>
              <h6>Tools: React JS, MUI</h6>
              <p>Developed an Quiz App using React JS with MUI. Features include:</p>
              <li>Timer</li>
              <li>Final Result</li>
              <li>Random Qustion</li>
            </div>

            <div>
              <h5>To Do List</h5>
              <h6>Tools: React JS, ContextAPI, MUI</h6>
              <p>Developed an To Do List App using React JS with ContextAPI and MUI. Features include:</p>
              <p>Add, Edit, Delete</p>
            </div>

            <div>
              <h5>Gym Site</h5>
              <h6>Tools: React JS, MUI</h6>
              <p>Developed an Gym Site using React JS with MUI. Features include:</p>
              <p>Interactive Interface and Responsive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume