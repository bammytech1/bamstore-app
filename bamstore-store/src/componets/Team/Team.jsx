// import { HashLink as Link } from "react-router-hash-link"
import "./Team.scss"
import ceo from "../../assets/ceo-avatar.svg"
import shape from "../../assets/Shape.svg"
import Ellipse1 from "../../assets/Ellipse 154.png"
import Ellipse2 from "../../assets/Ellipse 155.png"
import arrowUp from "../../assets/arrow-up.svg"
import designIcon from "../../assets/design-icon.png"
import teamData from '../../teamdata'
import { useState } from "react";
import {motion, AnimatePresence} from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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


function Team() {
  return (
    <div id="team" className="team-section">
            <div className="team-container">
                    <h4>OUR TEAM</h4>
                    <h2>Team of Designer<br></br> and Developers</h2>
                    <Splide aria-label="Ourteam" options={{
                        fixedWidth: "300px",
                        perPage: 2,
                        gap    : '3rem',
                        breakpoints: {
                            640: {
                            perPage: 2,
                            gap    : '.7rem',
                            // height : '6rem',
                            },
                            480: {
                            perPage: 1,
                            gap    : '.7rem',
                            // height : '6rem',
                            },
                        },
                        pagination: true,
                        arrows: false,
                        focus: "center", 
                        }}>
                            {teamData.map(data => {
                                return (
                                    <SplideSlide className="team-card" key={data.id}>
                                        <TeamCard data={data} key={data.id} />
                                    </SplideSlide>
                                ) 
                            })}
                    </Splide>
            </div>
            <motion.div
            variants={aboutVariants}
            initial="offscreen"
            whileInView="onscreen"
            id="about" 
            className="founder-section">
                <div className="founder-container">
                    <motion.picture
                    initial={{x: "2rem", opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition = {{
                    delay: 1.1,
                    duration: 5,
                    type: "spring"
                    }}>
                    <img src={ceo} className="founder-image" alt="" />
                    </motion.picture>
                    <div className="founder-content">
                        <h4>FOUNDER WORD</h4>
                        <h2>Developing The  Powerful<br></br> Brands And Identities</h2>
                        <h5>Tolu Owolabi</h5>
                        <p>Founder</p>
                        <img className="shape" src={shape} alt="" />
                    </div>
                </div>
            </motion.div>
    </div>
  )
}

const TeamCard = (props) => {
    const { avatar, name, position, experience} = props.data;
    
    

    const [click, setClick] = useState(false);

    function close() {
        return setClick(!click);
    }
    return (
        <AnimatePresence >
            <motion.div
                whileHover={{ scale: 1.01 }}
                className="card-card">
                <img
                className="avatar" src={avatar} alt="" />
                <img className="ellipse1" src={Ellipse1} alt="" />
                <img className="ellipse2"src={Ellipse2} alt="" />
                <motion.div
                    animate={{y: click ? 80 : 185}}
                    className="card-info">
                    <div 
                    className="arrow-bg">
                        <motion.img
                        animate={{rotate: click ? 180 : 0}}
                        onClick={() => close()} src={arrowUp} alt="" />
                    </div>
                    <motion.div
                     className="infs">
                        <h2>{name}</h2>
                        <p>{position}</p>
                        <img className="design-icon" src={designIcon} alt="" />
                        <div className="expert">
                            <p className="expert-in">{experience[0]}</p>
                            <p className="expert-in">{experience[2]}</p>
                            <p className="expert-in">{experience[1]}</p>
                            <p className="expert-in">{experience[3]}</p>
                        </div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Team