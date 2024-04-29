import React from 'react'

const Works = () => {
  return (
      <div className="Projects bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <div className="container">
          <h1>Projects</h1>
          <div className="projectRow">
            <div className="inner-wrap w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-user-circle" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Progression<br />Outcome predictor<br />Python application</p>
                  <div className="movable-element">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-wrap w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-university" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Layered<br />Architecture<br />java,DBMS application</p>
                  <div className="movable-element">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-wrap w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-video-camera" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Theatre<br />Management System<br />Java application</p>
                  <div className="movable-element">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-wrap w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-video-camera" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Theatre<br />Management System<br />Java application</p>
                  <div className="movable-element">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-wrap w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
              <div className="inner">
                <div className="inner-wrap-element"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
                <div className="inner-wrap-element">
                  <p>Edu<br />Planner</p>
                  <div className="movable-element">
                    <i className="fa fa-github" aria-hidden="true"></i>
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
