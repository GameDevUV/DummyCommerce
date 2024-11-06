import React from 'react'
import {Footer, Header } from './Components'
import { Outlet } from 'react-router-dom'
import App from './App'

const Layout = () => {
  return (
    <>
    <Header />
    <App />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout