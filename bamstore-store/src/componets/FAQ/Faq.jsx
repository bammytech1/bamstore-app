
// import heroImage from '../../assets/pic.svg';
// import "./Hero.scss";

import { useState } from 'react';
// import { HashLink as Link } from "react-router-hash-link";
import "./Faq.scss"
import { motion} from "framer-motion";




const Faq = () => {

    const [click, setClick] = useState(null);

    const toggle = (i) => {
        if (click == i) {
            return setClick(null)
        }

        setClick(i)
    }


  return (
    <div  className="about-section">
        <div className="faq-container">
            <motion.div
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring"
            }}
             className="faq-content">
                <h4>FAQ</h4>
                <h2>Frequently Asked questions</h2>
                <p>Elearning provides a full service range includi business understanding</p>
            </motion.div>
            <div className="faq-container-2">
                <div className="accordion">
                    {faqData.map((data, i) => {
                        return (
                        <div className="data" key={i}>
                            <div className="title" onClick={() => toggle(i)}>
                                <h3>{data.question}</h3>
                                <span>{click ===i ? '-' : '+'}</span>
                            </div>
                            <div className={ click===i ?'content show': 'content'}>{data.answer}</div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    </div>
  )
}



const faqData = [
    {
        question: 'Question1',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas earum dignissimos nostrum consequatur rerum qui alias, vitae unde quia autem, fuga provident laboriosam consequuntur. Laboriosam ea optio tenetur eius?'
    },
    {
        question: 'Question2',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas earum dignissimos nostrum consequatur rerum qui alias, vitae unde quia autem, fuga provident laboriosam consequuntur. Laboriosam ea optio tenetur eius?'
    },
    {
        question: 'Question3',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas earum dignissimos nostrum consequatur rerum qui alias, vitae unde quia autem, fuga provident laboriosam consequuntur. Laboriosam ea optio tenetur eius?'
    },
    {
        question: 'Question4',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas earum dignissimos nostrum consequatur rerum qui alias, vitae unde quia autem, fuga provident laboriosam consequuntur. Laboriosam ea optio tenetur eius?'
    },
    {
        question: 'Question5',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptas earum dignissimos nostrum consequatur rerum qui alias, vitae unde quia autem, fuga provident laboriosam consequuntur. Laboriosam ea optio tenetur eius?'
    },
]

export default Faq