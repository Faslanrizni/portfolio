
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {fadeIn, textVariant} from "../utils/motion.js";
import {projectsConstants} from "../constants/index.js";
import {Tilt} from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper.jsx";



const ServiceCard = ({index, title}) =>{
    return (
        <Tilt className={'xs:w-[250px] w-full'}>{title}
            <motion.div
                variants={fadeIn('right','spring',0.5*index, 0.75)}
                className={'w-full orange-gold-gradient p-[1px] rounded-[20px] shadow-card'}
            >
                <div
                    options={{
                        max:45,
                        scale:1,
                        speed:450

                    }}
                    className={'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'}

                >
                    {/*<img src={icon} alt="icon"*/}
                    {/*     className={'w-16 h-16 object-contain'}*/}
                    {/*/>*/}
                    <h3 className={'text-white text-[20px] font-bold text-center'}>{title}</h3>
                </div>

            </motion.div>
        </Tilt>
    )
}

const About = () => {

    return (
        <>

            <div className={'flex flex-wrap gap-10'} id={'projects'}>
                {projectsConstants.map((service,index)=>(
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    )
}
export default  SectionWrapper (About,'about')

