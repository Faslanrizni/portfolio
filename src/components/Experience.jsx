import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
;import {motion} from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import {styles} from "../styles";
import {experiences} from "../constants/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {textVariant} from "../utils/motion.js";


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          what i have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
    </>
  )
}

export default Experience