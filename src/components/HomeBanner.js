import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/rb_8.png";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Vikas Gupta</div>
              <div className="staticTitle">
                Passionate
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/vikas-gupta-59035b2a4/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="boy-with-laptop" />
        </div>
    </div>
  )
}
