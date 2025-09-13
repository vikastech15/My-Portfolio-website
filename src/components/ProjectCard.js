import React from 'react';
import "./ProjectCardStyle.css";
import {FaArrowRight} from "react-icons/fa";
import {FiGithub} from "react-icons/fi";
import {FiChrome} from "react-icons/fi";
import Tilt from 'react-parallax-tilt';
import { CgDisplayFlex } from 'react-icons/cg';

export default function ProjectCard(props) {
  const handleOnClick = () => {
    window.open(`${props.projectLink}`);
  }
  const handleOnClick2 = () => {
    window.open(`${props.deployedProjectLink}`);
  }

  return (
    <div className='project-window' id = {props.id}>
      <div className={`project-wrapper ${props.className}`}>
        <div className="about-project">
          <div className="project-title"><a href='https://book-on-desk.vercel.app/'>{props.projectTitle}</a></div>
          <div className="desc">{props.projectDesc}</div>
          <div className='btnCont'>
          <span><button className='btn' onClick={handleOnClick}><span>View on<FiGithub className="social" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }}/></span><FaArrowRight className='btn-arrow' size={22} style={{marginLeft: "1rem"}}/></button></span>
          <span><button className='btn' onClick={handleOnClick2}><span>View on<FiChrome className="social" size={20} style={{ marginLeft: "8px", position: "relative", top: "2px", strokeWidth: "3" }}/></span><FaArrowRight className='btn-arrow' size={22} style={{marginLeft: "1rem"}}/></button></span>
        </div>
        </div>
        <Tilt className="project-img" gyroscope= {true} >
            <a href={props.deployedProjectLink} target= "_blank" rel="noopener noreferrer"><img src={props.projectImg} alt="Displaying Project" /></a>
        </Tilt>

      </div>
    </div>
  )
}