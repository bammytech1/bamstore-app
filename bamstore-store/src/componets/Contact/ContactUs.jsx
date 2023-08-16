
import clientImage from '../../assets/happy-client.svg';
import "./ContactUs.scss";

// import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { motion} from "framer-motion";




const ContactUS = () => {


  return (
    <div  className="contact-section">
        <div className="contact-container">
            <motion.picture
            initial={{x: "2rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring"
            }}>
            <img src={clientImage} className="contact-image" alt="" />
            </motion.picture>
            <motion.div
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring"
            }}
             className="contact-content">
                <h1>We Help <br></br> TO Build Your Dream Project</h1>
                <p>Elearning provides a full service range including technical skils, design, business understanding</p>
                <div className="btn-group">
                    <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="btn-sec" ><Link to="#">CONTACT US</Link></motion.div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ContactUS