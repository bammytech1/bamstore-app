
import pic2 from '../../assets/pic2.png';
import "./About.scss";

import { HashLink as Link } from 'react-router-hash-link';
import CountUp from "react-countup";
import { motion } from "framer-motion";

const aboutVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};


function About() {
  return (
    <motion.div
    variants={aboutVariants}
    initial="offscreen"
    whileInView="onscreen"
     id="about" className="about-section">
        <div className="about-container">
            <motion.picture
            initial={{x: "2rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition = {{
              delay: 1.9,
              duration: 2,
              type: "spring"
            }}>
            <img src={pic2} className="about-image" alt="" />
            </motion.picture>
            <div className="about-content">
                <h4>ABOUT</h4>
                <h2>Developing The <br></br> Powerful Brands And Identities</h2>
                <h5>Provides full service range</h5>
                <p>Ability to put themselves in the marchants shoe. it is meant to partner on the long run. and work as an extension of the marchants team.</p>
                <div className="btn-group">
                    <Link className="btn-sec" to='/'>ABOUT US</Link>
                </div>
            </div>
            <div className="experience">
             
              <ul className='counts'>
                <CountUp className='start' end={10} duration={4}/>+
                <li className='counts-details'>Years of experience</li>
              </ul>
              <ul className='counts'>
                <CountUp className='start' end={73} duration={4}/>+
                <li className='counts-details'>Agency members</li>
              </ul>
              <ul className='counts'>
                <CountUp className='start' end={5000} duration={4}/>+
                <li className='counts-details'>Projects complete</li>
              </ul>
            </div>
        </div>
    </motion.div>
  )
}

export default About