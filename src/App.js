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
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#22c1c3'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
<<<<<<< HEAD
       <ProjectCard
     
        projectTitle="Books On Desk"
        projectDesc="Our real-time Resource sharing platform, built with ReactJs library, Node.js, HTML, CSS, and JavaScript, offers an interactive and engaging platform for renting, buying and selling various resources like books, research papers and novels"
        projectLink="https://github.com/vikastech15/realtime-quiz-app-mongoDb"
        deployedProjectLink="https://book-on-desk.vercel.app/"
        projectImg={require('./images/Book.png')}
      />
=======
>>>>>>> 21e35729c4436a7158660df339dd21c448715abe
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Portfolio Website using React-js"
        projectDesc="Crafted a dynamic and responsive portfolio website with HTML, CSS, JavaScript, and React.js, 
integrating interactive elements and a polished design to highlight professional achievements to 
showcase projects and skills"
        projectLink="https://github.com/vikastech15/Portfolio-website-using-reactjs.git"
<<<<<<< HEAD
        deployedProjectLink="https://vikas-gupta-portfolio.vercel.app/"
=======
        deployedProjectLink="https://github.com/vikastech15/Portfolio-website-using-reactjs.git"
>>>>>>> 21e35729c4436a7158660df339dd21c448715abe
        projectImg={require('./images/portfolio.png')}
      />

      <ProjectCard
        projectTitle="Real-Time Quiz Application"
        projectDesc="Our real-time quiz application, built with Node.js, HTML, CSS, and JavaScript, offers an interactive and engaging platform for hosting and participating in live quizzes"
        projectLink="https://github.com/vikastech15/realtime-quiz-app-mongoDb"
<<<<<<< HEAD
        deployedProjectLink="https://realtime-quiz-app-mongo-db.vercel.app/"
        projectImg={require('./images/quiz app.png')}
      />
      <ProjectCard
        projectTitle="Books On Desk"
        projectDesc="Our real-time Resource sharing platform, built with ReactJs library, Node.js, HTML, CSS, and JavaScript, offers an interactive and engaging platform for renting, buying and selling various resources like books, research papers and novels"
        projectLink="https://github.com/vikastech15/realtime-quiz-app-mongoDb"
        deployedProjectLink="https://book-on-desk.vercel.app/"
        projectImg={require('./images/quiz app.png')}
      />

      
=======
        deployedProjectLink="https://github.com/vikastech15/realtime-quiz-app-mongoDb"
        projectImg={require('./images/quiz app.png')}
      />

      {/* <ProjectCard
        className = "odd"
        projectTitle="Rog-free: accessible anytime, anywhere"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://github.com/Deepajha14/Rog-Free"
        deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
        projectImg={require('./images/projecTarot.png')}
      /> */}
>>>>>>> 21e35729c4436a7158660df339dd21c448715abe
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
