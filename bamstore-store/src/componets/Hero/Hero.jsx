import heroImage from "../../assets/hero-image.svg";
import "./Hero.scss";

// import { useState } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <motion.picture
          initial={{ x: "2rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
        >
          <img src={heroImage} className="hero-image" alt="" />
        </motion.picture>
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="hero-content"
        >
          <h4>Best Product</h4>
          <h1>
            Get Quality Gadgets, <br></br>Forget The Rest...
          </h1>
          <p>
            Elearning provides a full service range including technical skils,
            design, business understanding fujhthjkndfghusdgnj gaduihgjkhegrueir
            adfyuhtearyjkt
          </p>
          <div className="btn-group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn-sec"
              to="/"
            >
              <Link to="/">Explore Now</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
