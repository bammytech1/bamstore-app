import React from 'react'
import Carousel from './carousel/Carousel'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NewItems } from '../datas/productData'
import { shortenText } from '../utils'
import ReactStars from "react-rating-stars-component";


function GamingProduct() {
  return (
    <section className='w-full bg-light flex justify-center  '>
        <div className='container  max-w-7xl flex flex-col item-center justify-center gap-8 p-6 '>
            {/* <h2 className=' max-w-3xl w-full  text-dark text-left font-bold text-2xl md:text-5xl'>Gaming</h2> */}
            {/* <Carousel /> */}
            <div className=" grid min-[650px]:grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3 justify-center">
                {NewItems.map((itemList) => { 
                    return (
                    <Products itemList={itemList} key={itemList.id} />
                )})}
            </div>
        </div>
    </section>
  )
}

const Products = (props) => {
    const {image, title, description, price} = props.itemList
    return (
        <motion.div
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 1 }}
         className="min-w-[250px]  rounded-3xl flex flex-col group bg-light border-[1px] border-gray justify-center items-center p-6 ">
                        
                        <div className=" h-40 w-40 rounded-full bg-pry-color border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">                                          
                            <img src={image}
                                className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                alt=""/>
                            <div
                                className="rounded-full absolute z-10 border-2 border-light w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                            </div>
                        </div>
                        <div className='flex flex-col items-start'>
                            <a href="#"
                                className=" block text-dark font-bold text-left hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-2">{title}</a>
                            <p className="mb-2 font-normal  text-sm md:text-sm text-left text-[#700000]">{shortenText(description, 40) }</p>
                            <p className=' text-dark font-bold text-left ext-lg md:text-xl'><span className=' text-dark font-bold text-left ext-lg md:text-xl'>&#8358;</span>{price} </p>
                            <ReactStars
                                count={5}
                                // onChange={ratingChanged}
                                size={24}
                                isHalf={true}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                                value="3"
                                />
                            <div className="w-full flex justify-between item-center  ">
                                <motion.div
                                whileHover={{ scale: 0.9 }}
                                whileTap={{ scale: 1 }}
                                className="rounded-full bg-pry-color px-5 py-2.5 text-sm  font-medium text-white transition duration-200 hover:bg-blue-900 active:bg-blue-950"
                                to="/"
                                >
                                    <Link to="/">Buy Now</Link>
                                </motion.div>
                                <motion.div
                                whileHover={{ rotate: 45}}
                                whileTap={{ scale: 1 }}
                                to="/"
                                >
                                    <ion-icon size='large' name="add-circle-outline" style={{ color: 'pry-color' }} ></ion-icon>
                                </motion.div>
                                

                            </div>
                        </div>
        </motion.div>
    )
}

export default GamingProduct