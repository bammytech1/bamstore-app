import React from 'react'
import GamingProduct from '../componets/GamingProduuct'
import BreadCrumb from '../componets/BreadCrumb'
import {Helmet} from "react-helmet";
import { Meta } from '../componets/Meta';
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { TEInput } from "tw-elements-react";
import { NewItems, ProductData } from '../datas/productData';



export const OurStore = () => {
    // const {image, title, description, price, stock} = NewItems
  return (
    <>
    <Meta title={'Store'} />
      <main className= ' flex flex-col gap-6 mt-20 bg-light md:mt-24'>
        <BreadCrumb title='Store' />
        <h3 className='text-stone-600 text-center text-lg md:text-3xl md:my-10  font-bold'>All Product</h3>
        <div className="w-full  mb-10 flex flex-wrap justify-center items-center">
            <div className="w-full border-t border-b h-16 border-gray flex items-center justify-around">
                <h3 className='text-dark'>{NewItems.length} Products</h3>
                <div className=' bg-light p-2 flex h-full items-center gap-2 border-l border-r border-gray '>
                                <p>Sort by</p>
                                <select name="" id="" className='st'>
                                    <option value="manual">Featured</option>
                                    <option value="best-selling" selected="selected">Best Selling</option>
                                    <option value="tittle-ascending">Alphabetically, A-Z</option>
                                    <option value="tittle-descending">Alphabetically, Z-A</option>
                                    <option value="tittle-ascending">Price, low to high</option>
                                    <option value="tittle-descending">price, high to low</option>
                                </select>
                </div>
            </div>
            <div className='w-full text-base-100 container max-w-7xl md:flex md:justify-around  '>
            <div className="flex max-w-[300px] flex-row border-l border-r border-b border-gray">
                    <div className=" hidden md:p-2 md:flex md:flex-col md:gap-4">
                        <div className="flex flex-col items-start gap-4 border-b border-gray bg-gray-bk p-4 ">
                            <h3 className='font-bold text-base '>Shop by Categories</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>Phones</li>
                                    <li>Laptop</li>
                                    <li>PowerBank</li>
                                    <li>Accessories</li>
                                </ul>
                        </div>
                        <div className="flex flex-col items-start gap-4 border-b border-gray  bg-gray-bk p-4 ">
                            <h3 className='font-bold text-base '>filter By</h3>
                            <div>
                                <h4>Availability</h4>
                                <div>
                                    <input 
                                    type="checkbox"
                                    value={""}
                                    id=''
                                     />
                                     <label htmlFor="">In Stock (1)</label>
                                </div>
                                <div>
                                    <input 
                                    type="checkbox"
                                    value={""}
                                    id=''
                                     />
                                     <label htmlFor="">Out of Stock (0)</label>
                                </div>
                            </div>
                            <div>
                                <h4 className='font-bold'>Price</h4>
                                <div className="max-w-[300px] flex justify-center items-center  gap-2">
                                    <label htmlFor="">&#8358;</label>
                                    <input type="text" placeholder="From"  className="input bg-neutral input-bordered border-base-100 w-full max-w-xs" />
                                    <label htmlFor="">&#8358;</label>
                                    <input type="text" placeholder="To"  className="input bg-neutral input-bordered border-base-100 w-full max-w-xs" />
                                    
                                </div>
                            </div>
                            <div>
                                <h4 className='font-bold'>color</h4>
                                <div className="max-w-[200px] flex justify-center items-center  gap-2">
                                    <div>
                                        <ul className='colors w-full list-none flex flex-wrap gap-2'>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <h4 className='font-bold'>Size</h4>
                                <div className="max-w-[200px] flex justify-center items-center  gap-2">
                                    <div>
                                        <div>
                                        <input 
                                        type="checkbox"
                                        value={""}
                                        id='color-1'
                                        />
                                        <label htmlFor="">s (2)</label>
                                        </div>
                                        <div>
                                            <input 
                                            type="checkbox"
                                            value={""}
                                            id='color-2'
                                            />
                                            <label htmlFor="">m (0)</label>
                                        </div>
                                        </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 border-b border-gray  bg-gray-bk p-4 ">
                            <h3 className='font-bold text-base '>Product Tags</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>Phone</li>
                                    <li>Laptop</li>
                                    <li>PowerBank</li>
                                    <li>Accessories</li>
                                </ul>
                        </div>
                        <div className="flex flex-col items-start gap-4 bg-gray-bk p-4 rounded-lg">
                            <h3 className='font-bold text-base '>Random Product</h3>
                            <ul className='flex flex-col gap-2'>
                                    <li>Phone</li>
                                    <li>Laptop</li>
                                    <li>PowerBank</li>
                                    <li>Accessories</li>
                                </ul>
                        </div>
                        
                    </div>
                    
                </div>
                <section className=''>
                    <GamingProduct />
                </section>
            </div>
        </div>  
      </main>
    </>
  )
}




{/* <div className="container flex max-w-7xl p-6">
                <div className="flex flex-row">
                    <div className="bg-pry-color p-2 flex flex-col gap-4">
                        <div className="flex flex-col items-start gap-4 bg-gray-bk p-4 rounded-lg">
                            <h3 className='font-bold text-base '>Shop by Categories</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>Phone</li>
                                    <li>Laptop</li>
                                    <li>PowerBank</li>
                                    <li>Accessories</li>
                                </ul>
                        </div>
                        <div className="flex flex-col items-start gap-4 bg-gray-bk p-4 rounded-lg">
                            <h3 className='font-bold text-base '>filter By</h3>
                            <div>
                                <h4>Availability</h4>
                                <div>
                                    <input 
                                    type="checkbox"
                                    value={""}
                                    id=''
                                     />
                                     <label htmlFor="">In Stock (1)</label>
                                </div>
                                <div>
                                    <input 
                                    type="checkbox"
                                    value={""}
                                    id=''
                                     />
                                     <label htmlFor="">Out of Stock (0)</label>
                                </div>
                            </div>
                            <div>
                                <h4 className='font-bold'>Price</h4>
                                <div className="max-w-sm flex justify-center items-center  gap-2">
                                <label htmlFor="">&#8358;</label>
                                    <TEInput
                                    className='max-w-[70px]'
                                    
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="From"
                                        >

                                    </TEInput>
                                    <label htmlFor="">&#8358;</label>
                                    <TEInput
                                    className='max-w-[70px]'
                                        type="text"
                                        id="exampleFormControlInput1"
                                        label="To"
                                    >
                                    </TEInput>
                                </div>
                            </div>
                            <div>
                                <h4 className='font-bold'>color</h4>
                                <div className="max-w-[200px] flex justify-center items-center  gap-2">
                                    <div>
                                        <ul className='colors w-full list-none flex flex-wrap gap-2'>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                            <li className='w-5 h-5 bg-red-700 rounded-3xl'></li>
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                            <div>
                                <h4 className='font-bold'>Size</h4>
                                <div className="max-w-[200px] flex justify-center items-center  gap-2">
                                    <div>
                                        <div>
                                        <input 
                                        type="checkbox"
                                        value={""}
                                        id='color-1'
                                        />
                                        <label htmlFor="">s (2)</label>
                                        </div>
                                        <div>
                                            <input 
                                            type="checkbox"
                                            value={""}
                                            id='color-2'
                                            />
                                            <label htmlFor="">m (0)</label>
                                        </div>
                                        </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 bg-gray-bk p-4 rounded-lg">
                            <h3 className='font-bold text-base '>Product Tags</h3>
                                <ul className='flex flex-col gap-2'>
                                    <li>Phone</li>
                                    <li>Laptop</li>
                                    <li>PowerBank</li>
                                    <li>Accessories</li>
                                </ul>
                        </div>
                        <div className="flex flex-col items-start gap-4 bg-gray-bk p-4 rounded-lg">
                            <h3 className='font-bold text-base '>Random Product</h3>
                            <ul className='flex flex-col gap-2'>
                                    <li>Phone</li>
                                    <li>Laptop</li>
                                    <li>PowerBank</li>
                                    <li>Accessories</li>
                                </ul>
                        </div>
                        
                    </div>
                    <div className=' bg-orange-600'>
                        <div className= 'w-full p-3 bg-pry-color grid'>
                            <div className='w-full bg-light p-2 flex items-center gap-2 rounded-3xl'>
                                <p>Sort by</p>
                                <select name="" id="">
                                    <option value="manual">Featured</option>
                                    <option value="best-selling" selected="selected">Best Selling</option>
                                    <option value="tittle-ascending">Alphabetically, A-Z</option>
                                    <option value="tittle-descending">Alphabetically, Z-A</option>
                                    <option value="tittle-ascending">Price, low to high</option>
                                    <option value="tittle-descending">price, high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}