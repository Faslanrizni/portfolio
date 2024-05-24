

import { BrowserRouter } from "react-router-dom";
import { Contact,Hero,Navbar,Works  } from "./components";
import SkillComponent from "./components/SkillComponent.jsx";
import AboutMe from "./components/AboutNew.jsx";
import ProjectNew from "./components/ProjectNew.jsx";
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
          <AboutMe/>
          <Works/>
          <ProjectNew/>
          <SkillComponent/>
        <div className="relative z-0">
        <Contact/>

        </div>

      </BrowserRouter>
  
  )
}

export default App