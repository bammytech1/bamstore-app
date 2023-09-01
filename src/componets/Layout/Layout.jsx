import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'


function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout