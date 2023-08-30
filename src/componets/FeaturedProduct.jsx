import React from 'react'
import pad from "../assets/controller.svg"
import iphone from "../assets/iphone.svg"
import accessories from "../assets/accessories.svg"
import game from "../assets/game.svg"

function FeaturedProduct() {
  return (
    <>
        <section className="w-full flex justify-center items-center  p-6 ">
            <div className="container w-full flex flex-wrap md:flex-row md:flex-nowrap md:gap-4 gap-4 md:gap-y-0 max-w-7xl  justify-between items-center ">
                <div className='rounded-full  bg-dark w-[100px] h-[100px] md:w-[190px] md:h-[190px] relative'>
                    <img src={accessories} alt="" className=' w-full h-auto md:w-[190px] md:h-auto object-contain block mt-5 ' />
                    <span className='absolute -bottom-5 w-full flex justify-center rounded-full bg-light p-1 md:p-3 font-bold text-base mb-3 text-dark transition duration-200 box-shadow-2'>PHONES</span>
                </div>
                <div className='rounded-full  bg-dark w-[100px] h-[100px] md:w-[190px] md:h-[190px] relative'>
                    <img src={game} alt="" className=' w-full h-auto md:w-[190px] md:h-auto object-contain block mt-5 ' />
                    <span className='absolute -bottom-5 w-full flex justify-center rounded-full bg-light p-1 md:p-3 font-bold text-base mb-3 text-dark transition duration-200 box-shadow-2'>PHONES</span>
                </div>
                <div className='rounded-full  bg-dark w-[100px] h-[100px] md:w-[190px] md:h-[190px] relative'>
                    <img src={accessories} alt="" className=' w-full h-auto md:w-[190px] md:h-auto object-contain block mt-5 ' />
                    <span className='absolute -bottom-5 w-full flex justify-center rounded-full bg-light p-1 md:p-3 font-bold text-base mb-3 text-dark transition duration-200 box-shadow-2'>PHONES</span>
                </div>
                <div className='rounded-full  bg-dark w-[100px] h-[100px] md:w-[190px] md:h-[190px] relative'>
                    <img src={accessories} alt="" className=' w-full h-auto md:w-[190px] md:h-auto object-contain block mt-5 ' />
                    <span className='absolute -bottom-5 w-full flex justify-center rounded-full bg-light p-1 md:p-3 font-bold text-base mb-3 text-dark transition duration-200 box-shadow-2'>PHONES</span>
                </div>
                <div className='rounded-full  bg-dark w-[100px] h-[100px] md:w-[190px] md:h-[190px] relative'>
                    <img src={accessories} alt="" className=' w-full h-auto md:w-[190px] md:h-auto object-contain block mt-5 ' />
                    <span className='absolute -bottom-5 w-full flex justify-center rounded-full bg-light p-1 md:p-3 font-bold text-base mb-3 text-dark transition duration-200 box-shadow-2'>PHONES</span>
                </div>
                <div className='rounded-full  bg-dark w-[100px] h-[100px] md:w-[190px] md:h-[190px] relative'>
                    <img src={accessories} alt="" className=' w-full h-auto md:w-[190px] md:h-auto object-contain block mt-5 ' />
                    <span className='absolute -bottom-5 w-full flex justify-center rounded-full bg-light p-1 md:p-3 font-bold text-base mb-3 text-dark transition duration-200 box-shadow-2'>PHONES</span>
                </div>
            </div>
        </section>
        <section className='w-full h-auto flex flex-col lg:flex-row gap-4 p-6 justify-center items-center '>
            <div className=" container max-w-xl md:max-w-2xl flex justify-center item-center bg-pry-color w-full pl-5 rounded-3xl">
                <div className="flex flex-col text-light gap-6 items-start justify-center w-full py-4  max-w-xs ">
                    <p className='md:text-2xl text-xl '>Gaming</p>
                    <h2 className='md:text-3xl lg:text-4xl text-2xl w-full text-700'>Ps5 Edge <br /> Controller</h2>
                    <p className='text-xs md:text-xs lg:text-base w-3/4'>Lorem ipsum dolorem architecto aliquam quia praesentium incidunt sit enim, error aperiam,</p>
                    <button className='rounded-full bg-light px-5 py-3 text-base mb-3 font-medium text-pry-color transition duration-200 hover:bg-gray active:bg-gray-bk'>
                    shop now</button>
                </div>
                <img src={iphone} alt="" className='object-cover w-full  max-h-80 md:max-h-full max-w-xs rounded-3xl' />        
            </div>
            <div className=" container max-w-xl md:max-w-2xl  flex justify-center item-center bg-color-1 w-full pl-5 rounded-3xl">
                <div className="flex flex-col text-light gap-6 items-start justify-center w-full py-4  max-w-xs ">
                    <p className='md:text-2xl text-xl '>Apple</p>
                    <h2 className='md:text-3xl lg:text-4xl text-2xl w-full text-700'>iphone <br /> 14 ProMAx</h2>
                    <p className='text-xs md:text-xs lg:text-base w-3/4'>Lorem ipsum dolor sit amet ctio dol architecto aliquam quia praesentium incidunt sit enim, </p>
                    <button className='rounded-full bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700'
                    >shop now</button>
                </div>
                <img src={iphone} alt="" className='object-contain w-full  max-h-80 md:max-h-full max-w-xs rounded-3xl' />        
            </div>
        </section>
    </>
  )
}

export default FeaturedProduct