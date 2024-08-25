import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles"; // Named import
import { services } from "../constants"; // Named import
import { fadeIn, textVariant } from "../utils/motion"; // Named imports
import './About.css';
import { SectionWrapper } from "../hoc";


// Define ServiceCard component with Tailwind CSS adjustments
const ServiceCard = ({ index, title, icon }) => (
  
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full max-w-[250px] mx-auto bg-gradient-to-r from-pink-400 to-red-300 p-[1px] rounded-[15px] shadow-lg"
  >
    <div className="bg-black-gradient rounded-[15px] py-4 px-6 min-h-[200px] flex flex-col justify-center items-center cursor-pointer">
      {icon && (
        <img src={icon} alt={title} className="w-12 h-12 object-contain mb-4" />
      )}
      <h3 className="text-white text-[18px] font-semibold text-center">{title}</h3>
    </div>
  </motion.div>
);

const About = () => {
  if (!services || services.length === 0) {
    return (

      <div className="text-center text-secondary mt-20 ">
        No services available at the moment.
      </div>
      
    );
  }

  return (
    
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText} >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto"
      >
       A dedicated and versatile Administrative Science student with a passion for technology and designs. Violinist, Fluent in five languages
       and experienced in various industries including retail, hospitality, and administrative support. Designing graphics for social media platforms to promote products, events, or campaigns.
       Seeking a challenging role that combines my diverse skills in administration, and thecnology to contribute effectively to a dynamic team. Let's work together!
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");