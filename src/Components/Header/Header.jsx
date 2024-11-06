import React, { useState } from 'react'
import '../../Css/Header.css'
import { FaSearch, FaUser } from 'react-icons/fa'
import { BiPointer } from 'react-icons/bi'
import { FaCartShopping } from 'react-icons/fa6'
import logo from '../../Assets/Logos/logo.png'



const Header = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <nav>
                <div className="logo-part">
                    <img className='logo log-image' src={logo} alt="Uv ecommerce Logo" />
                </div>
                <div id='search-up' className="search-up Search-item-part">
                    <div className="s-area">
                        <input type="text" className="search-product" placeholder='Search Product here...' />
                        <button className="search"><FaSearch /></button>
                    </div>
                </div>
                <div className="profile-part">
                    <span id='search-visible' className="login cart" onClick={() => { setVisible(!visible) }} ><FaSearch size={25} /></span>
                    <span id='login-top' className="login profile"><FaUser size={20} />
                    <span className="login-text">login</span> </span>
                    <span id='cart-top' className="login cart"><FaCartShopping size={20} /></span>
                </div>
            </nav>
            <div id='search-down' className="search" style={{ display: visible ? 'flex' : 'none' }}>
                <div className="Search-item-part">
                    <div className="s-area">
                        <input type="text" className="search-product" placeholder='Search Product here...' />
                        <button id='s2' className="search"  ><FaSearch /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header