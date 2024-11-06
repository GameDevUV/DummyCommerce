import React, { useContext } from 'react'
import '../../Css/Shop.css'
import { FaFacebook, FaInstagram, FaShare, FaUser, FaWhatsapp } from 'react-icons/fa'
import EcommContext from '../../ContextApi/EcommContext'


const Shop = () => {

    const { selectItem } = useContext(EcommContext);
    return (
        <>
            <main>
                <div className="Shop-page">
                    <div className="shop-container">
                        <div className="shop-left">
                            <div className="nevigate-shop">
                                <div className="share">
                                    <FaInstagram style={{ cursor: 'pointer' }} />
                                    <FaWhatsapp style={{ cursor: 'pointer' }} />
                                    <FaFacebook style={{ cursor: 'pointer' }} />
                                    <FaShare style={{ cursor: 'pointer' }} />
                                </div>
                            </div>
                            <div className="product-image-slide">
                                <div className="image-slide" style={{ backgroundImage: `url(${selectItem.image})` }}></div>
                                <div className="image-slide-row">
                                    <div className="slide-row"></div>
                                    <div className="slide-row"></div>
                                    <div className="slide-row"></div>
                                </div>
                            </div>
                            <div className="add-to-cart">
                                <button className="Shop">Add To Cart</button>
                                <button className="Shop">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="shop-right">
                            <div className="product-detaile">
                                <div className="title">
                                    <h1 className="titlename">
                                        {selectItem.title}
                                    </h1>
                                </div>
                                <div className="details">
                                    <div className="details">{selectItem.description}</div>
                                </div>
                                <div className="price">
                                    <h3 className="price">Price: ${selectItem.price}</h3>
                                </div>
                                <div className="rating">
                                    <div className="rating">{selectItem.rating.rate} / {selectItem.rating.count}</div>
                                </div>
                                {/* <div className="reviews">
                                    <span className="user">
                                        <span className="user-logo"><FaUser /></span>
                                        <span className="user-name">Vishal singh</span>
                                    </span>
                                    <div className="star">5555</div>
                                    <div className="rating">Too Good Quality</div>
                                </div>
                                <div className="reviews">
                                    <span className="user">
                                        <span className="user-logo"><FaUser /></span>
                                        <span className="user-name">Vishal singh</span>
                                    </span>
                                    <div className="star">5555</div>
                                    <div className="rating">Too Good Quality</div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Shop