import React from 'react'
import {styles} from "../styles";
import { FaGithub } from "react-icons/fa";
/**/

const Works = () => {
  return (
      <div className="Projects  py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" id={"work"}>
        <div className="container">
          <h1>Projects</h1>
          <div className="projectRow ">
            <div className="inner-wrap w-full orange-gold-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-user-circle" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Order-Management-system<br />Spring boot application - Microservice</p>
                  <div className="movable-element">
                    <a href="https://github.com/Faslanrizni/Order-Management-system" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-wrap w-full orange-gold-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-university" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Hospital Management<br />Spring boot application</p>
                  <div className="movable-element">
                    <a href="https://github.com/Faslanrizni/SpringBootProject" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-wrap w-full orange-gold-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-video-camera" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>English Learning platform for <br />skill professionals <br/> Web application</p>
                  <div className="movable-element">
                    <a href="https://github.com/huzaifaAmeer02" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="inner-wrap w-full orange-gold-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-video-camera" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Real Estate<br />Management System<br />Web application</p>
                  <div className="movable-element">
                    <a href="https://github.com/Faslanrizni/react_realEstateWeb" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-wrap w-full orange-gold-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Blog page<br />Web application</p>
                  <div className="movable-element">
                    <a href="https://github.com/Faslanrizni/blog-page-client" target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Works;
