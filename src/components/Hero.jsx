import React from 'react';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import myImage from '../assets/newBg.jpg';



const Hero = () => {
  return (
      <section className='relative w-full h-screen mx-auto bg-gradient-to-b from-blue-900 to-black'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-10`}>
          <div className="flex flex-col justify-center items-start mt-5">
            <h1 className={`${styles.heroHeadText} text-white leading-none`}>Hi, I'm <br/> Faslan Rizni</h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-lg`}>
              Full Stack Developer <br /> Machine Learning Enthusiast
            </p>
          </div>
          <div className="flex justify-center items-center mt-5">
            <img src={myImage} alt="Faslan Rizni" className="rounded-lg shadow-lg w-[600px] h-auto" />
          </div>
        </div>
      </section>
  );
}



export default Hero

