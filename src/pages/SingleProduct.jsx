
import React, { useState } from "react"
import BreadCrumb from '../componets/BreadCrumb'
import { Meta } from '../componets/Meta'
import { Link } from "react-router-dom"
import image1 from '../assets/14pro.svg'
import image2 from '../assets/controller.svg'
import ReactStars from "react-rating-stars-component";
// import ImageZoom from "react-image-zooom";

const SingleProduct = () => {

  return (
    <>
        <Meta title={"Product"} />
        <main className= ' flex flex-col gap-6 items-center bg-light md:mt-24'>
            <BreadCrumb title="Product Name" />
            <section className="py-12 sm:py-16 text-dark"> 
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                        <div className="lg:col-span-3 lg:row-end-1">
                            <div className="lg:flex lg:items-start">
                                <div className="lg:order-2 lg:ml-5">
                                    <div className="max-w-xl overflow-hidden rounded-lg">
                                        <ImageZoom src={image1} alt="A image to apply the ImageZoom plugin" zoom="200"/>
                                        {/* <img className="h-full w-full max-w-full object-cover" src={image1} alt="" /> */}
                                    </div>
                                </div>

                            <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                <div className="flex flex-row items-start lg:flex-col">
                                <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                                    <img className="h-full w-full object-cover" src={image2} alt="" />
                                </button>
                                <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                    <img className="h-full w-full object-cover" src={image1} alt="" />
                                </button>
                                <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                                    <img className="h-full w-full object-cover" src={image1} alt="" />
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>

                    <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Iphone 14pro Max</h1>

                        <div className="mt-5 flex items-center">
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
                            <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
                        </div>

                        <h2 className="mt-8 text-base text-gray-900">Device Type</h2>
                        <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                            <label className="">
                                <input type="radio" name="type" value="Powder" className="peer sr-only" checked />
                                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Powder</p>
                            </label>
                            <label className="">
                                <input type="radio" name="type" value="Whole Bean" className="peer sr-only" />
                                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Whole Bean</p>
                            </label>
                            <label className="">
                                <input type="radio" name="type" value="Groud" className="peer sr-only" />
                                <p className="peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold">Groud</p>
                            </label>
                        </div>
                        <div className="flex flex-col gap-1 mt-3">
                            <h4 className="font-bold">Type: <span className="font-medium" >Phones</span></h4>
                            <h4>Brand: <span>Apple</span></h4>
                            <h4>Categories: <span>phone, iphone,</span></h4>
                            <h4>SKU: <span>SKU093</span></h4>
                            <h4>Availability: <span>541 in Stock</span></h4>
                            <h4>color: <span></span></h4>
                        </div>

                        

                        <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                        <div className="flex items-end">
                            <h1 className="text-3xl font-bold">$60.50</h1>
                        </div>

                        <button type="button" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Add to cart
                        </button>
                        </div>

                        <ul className="mt-8 space-y-2">
                            <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                                </svg>
                                Free shipping worldwide
                            </li>

                            <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                                </svg>
                                Cancel Anytime
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="border-b border-gray-300">
                        <nav className="flex gap-4">
                            <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

                            <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                            Reviews
                            <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                            </a>
                        </nav>
                        </div>

                        <div className="mt-8 flow-root sm:mt-12">
                            <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
                            <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                            <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            
            
        </main>
    </>
  )
}

export default SingleProduct

