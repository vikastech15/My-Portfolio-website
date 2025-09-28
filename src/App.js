import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="black"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: "fff",
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#22c1c3'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
       <ProjectCard
        id = "project"
        projectTitle="Books On Desk"
        projectDesc="Our real-time Resource sharing platform, built with ReactJs library, Node.js, HTML, CSS, and JavaScript, offers an interactive and engaging platform for renting, buying and selling various resources like books, research papers and novels"
        projectLink="https://github.com/vikastech15/realtime-quiz-app-mongoDb"
        deployedProjectLink="https://book-on-desk.vercel.app/"
        projectImg={require('./images/Book.png')}
      />
      <ProjectCard
        
        className = "odd"
        projectTitle="Portfolio Website using React-js"
        projectDesc="Crafted a dynamic and responsive portfolio website with HTML, CSS, JavaScript, and React.js, 
integrating interactive elements and a polished design to highlight professional achievements to 
showcase projects and skills"
        projectLink="https://github.com/vikastech15/Portfolio-website-using-reactjs.git"
        deployedProjectLink="https://vikas-gupta-portfolio.vercel.app/"
        projectImg={require('./images/portfolio.png')}
      />

      <ProjectCard
        projectTitle="Real-Time Quiz Application"
        projectDesc="Our real-time quiz application, built with Node.js, HTML, CSS, and JavaScript, offers an interactive and engaging platform for hosting and participating in live quizzes"
        projectLink="https://github.com/vikastech15/realtime-quiz-app-mongoDb"
        deployedProjectLink="https://realtime-quiz-app-mongo-db.vercel.app/"
        projectImg={require('./images/quiz app.png')}
      />

      
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
