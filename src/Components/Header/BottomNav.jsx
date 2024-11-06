import React from 'react'
import '../../Css/bottom-Nav.css'
import { FaHome, FaUser  } from 'react-icons/fa'
import { FaShop } from 'react-icons/fa6'

const BottomNav = () => {
  return (
    <>
      <nav className='bottom-navbar b-nav2'>
        <div className="nav-part-bottom"><FaHome /></div>
        <div className="nav-part-bottom"><FaShop /></div>
        <div className="nav-part-bottom"><FaUser /></div>
      </nav>

    </>
  )
}

export default BottomNav