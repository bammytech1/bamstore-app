import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Brand from '../Brand/Brand'
import Videoplay from '../Videoplay'
import FeaturedProduct from '../FeaturedProduct'
import BestSelling from '../BestSelling'
import Workspace from '../Workspace'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Hero/>
        <Brand/>
        {/* <Videoplay/> */}
        <FeaturedProduct />
        <BestSelling />
        <Workspace />
        <Footer/>
    </>
  )
}

export default Layout