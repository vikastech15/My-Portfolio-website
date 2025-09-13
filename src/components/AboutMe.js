import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/rb_3957.png";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h2><span>Vikas Gupta </span></h2>
          <p>MCA Student | Aspiring Software Developer <br></br> KNIT Sultanpur, India

</p>
          <h3>Hey there, 👋</h3>
          I'm <span> Vikas </span>,  a dedicated student currently pursuing my <span> Master of Computer Applications (MCA)</span> from KNIT Sultanpur. With a passion for technology and an eye for detail, I specialize in <span>frontend development </span>, focusing on crafting responsive, accessible, and visually appealing websites. My knowledge of core programming languages enables me to swiftly design, code, and deploy solutions with precision and efficiency.    <br/> <br/>
          While my expertise lies in <span>frontend technologies</span>, I am also exploring <span>backend development</span> to broaden my skill set and become a well-rounded software engineer. I'm always eager to take on new challenges and collaborate on exciting projects that make a positive impact.</div>
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name">VIKAS</div>
      </div>
  );
}
