

import { HashLink as Link } from "react-router-hash-link";
import "./HowWeWork.scss";
import play from "../../assets/play.png";
import playVideo from "../../assets/music-preview.mp4"
import playVid from "../../assets/pexels-mikhail-nilov-7534244-1920x1080-25fps.mp4"
import { motion } from "framer-motion";
import { useState } from "react";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.4
    }
  }
};



function HowWeWork() {
const [ showVideo, setShowVideo] = useState(false);


function watchVideo() {
  return (
    setShowVideo(!showVideo)
  )
}

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      // viewport={{ once: true, amount: 0.8 }}
     id="howWeWork" className="how-we-work">
        <motion.div
         variants={cardVariants}
         className="how-container">
            <div className="left">
                <h4>How we work</h4>
                <h2>Making Your Projects Look Awesome</h2>
                <p>Ability to put themselves in the marchants shoe. it is meant to partner on the long run. and work as an extension of the marchants team.</p>
                <div className="btn-group">
                    <Link className="" to='/'>Read More</Link>
                </div>
            </div>
            <div className="right-side">
                <ul className="list-details">1
                    <li>Full service range including</li>
                </ul>
                <ul className="list-details">2
                    <li>Full service range including</li>
                </ul>
                <ul className="list-details">3
                    <li>Full service range including</li>
                </ul>
            </div>
        </motion.div>
        <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        className="video-container">
            {/* < Videoplay /> */}
            <video muted loop autoPlay playsInline width="100%" >
                    <source  src={playVid} type="video/webm" />
                    <source allow="autoplay" src={playVid} type="video/mp4"/>
            </video>
            {showVideo && <div className="video-show"><iframe width="100%" height="562.50px" src={playVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe></div>}
            <div className="overlay">
                {/* <p>VIDEO REEL</p> */}
                <motion.img
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9, bounce:3, x: 10, delay:100 }} 
                whileInView={{ scale: 1 }}
                onClick={() => watchVideo()} src={play} alt="" />
                <h3>Unlock the Greatest Value Possible</h3>
            </div>
        </motion.div>
        <span></span>
    </motion.div>
  )
}

export default HowWeWork