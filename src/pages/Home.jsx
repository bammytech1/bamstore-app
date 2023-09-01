import React from 'react'
import Hero from '../componets/Hero/Hero'
import Brand from '../componets/Brand/Brand'
import Videoplay from '../componets/Videoplay'
import FeaturedProduct from '../componets/FeaturedProduct'
import BestSelling from '../componets/BestSelling'
import Workspace from '../componets/Workspace'
import NewProducts from '../componets/NewProducts'
import GamingFun from '../componets/GamingFun'

function Home() {
  return (
    <>
      <main className='flex flex-col gap-8 bg-light'>
        <Hero />
        <Brand />
        <Videoplay />
        <FeaturedProduct />
        <BestSelling />
        <Workspace />
        <NewProducts />
        <GamingFun />
      </main>
    </>
  )
}

export default Home