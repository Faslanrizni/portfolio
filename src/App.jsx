

import { BrowserRouter } from "react-router-dom";
import { About,Contact,Experience, Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas,  } from "./components";
import SkillComponent from "./components/SkillComponent.jsx";
import AboutMe from "./components/AboutNew.jsx";
// import ProjectNew from "./components/ProjectNew.jsx";
// import Footer from "./components/Footer.jsx";


const App = () => {  
  
  return (
    
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar/>
              <Hero />
            </div>
        </div>
        <About/>
          <AboutMe/>
        <Experience/>
          <Works/>
          {/*<ProjectNew/>*/}
          <SkillComponent/>
        <Tech/>
          {/*<Footer/>*/}

        <Feedbacks/>
        <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
        </div>

      </BrowserRouter>
  
  )
}

export default App