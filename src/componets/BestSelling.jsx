import React from 'react'
import ProductData from '../datas/productData'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function BestSelling() {
    
  return (
            <section className=' bg-gray-bk w-full flex flex-col justify-center items-center gap-6'>
                <h2 className=' max-w-3xl w-full text-dark text-center font-bold text-2xl md:text-5xl'>This Weeks Most Popular <span className='text-pry-color text-2xl md:text-5xl' >And Best Selling</span></h2>
                <div className=' bg-gray-bk w-full flex justify-center items-center '>
                    <div className=" container w-full m-3 flex overflow-x-scroll gap-2 mx-auto justify-center items-center">
                        {ProductData.map((items) =>(
                            <ProductType items={items} key={items.id} />
                        ))}
                    </div>
                </div>
            </section>
            
            

  )
}

{/* <div className="relative w-full m-3 flex flex-wrap gap-2 mx-auto justify-center items-center">
                        <div className="min-w-[200px]  rounded-3xl flex flex-col group bg-blue-200 justify-center items-center p-6">
                            <div className=" h-40 w-40 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">                                          
                                <img src={img}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                    alt=""/>
                                <div
                                    className="rounded-full absolute z-10 border-2 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                </div>
                            </div>
                            <a href="#"
                                className=" block text-black text-left hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                                Wild West Hoodie</a>
                            <p className="mb-4 font-light  text-sm md:text-sm text-left text-gray-400">Lorem ipsum dolor
                                sit</p>
                        </div>
            </div> */}




const ProductType = (props) => {
    const {image, title, description} = props.items

    return (
        <div className="min-w-[200px]  rounded-3xl flex flex-col group bg-light border-[1px] border-pry-color justify-center items-start p-6">
                            <div className=" h-40 w-40 rounded-full bg-pry-color border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">                                          
                                <img src={image}
                                    className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                    alt=""/>
                                <div
                                    className="rounded-full absolute z-10 border-2 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                </div>
                            </div>
                            <a href="#"
                                className=" block text-dark font-bold text-left hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-2">{title}</a>
                            <p className="mb-2 font-normal  text-sm md:text-sm text-left text-[#700000]">{description}</p>
                            <p className=' text-dark font-bold text-left ext-lg md:text-xl'><span className=' text-dark font-bold text-left ext-lg md:text-xl'>&#8358;</span>56,000.00 </p>
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="rounded-full bg-pry-color px-5 py-2.5 text-sm mt-3 font-medium text-white transition duration-200 hover:bg-blue-900 active:bg-blue-950"
                            to="/"
                            >
                                <Link to="/">Buy Now</Link>
                            </motion.div>
                        </div>
    )
}

export default BestSelling