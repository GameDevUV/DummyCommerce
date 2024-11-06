import React, { useContext } from 'react'
import '../../Css/Product.css'
import pro from '../../Assets/pogo.jpg'
// import logs from '../../Assets/logo.png'
import EcommContext from '../../ContextApi/EcommContext'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const { categoryArray, ProductsArray  , setSelecteCat } = useContext(EcommContext);
    return (
        <>
            <main>
                {/* Category */}
                <div className="Category-top">
                    <div className="categry-in">
                        {
                            categoryArray.map((i, index) => {
                                return (
                                    <div className="cat-item" key={index} onClick={()=>setSelecteCat(i)}>
                                        <NavLink className="cat-item-a" to={'category'} >
                                            <img src={'logs'} alt={i} className="cat-itm" />
                                            <h2 className="category-name-text">{i}</h2>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Slider */}
                <div className="Hot-slider">
                    <div className="Slide">
                        <div className="next-prev">Prev</div>
                        <div className="next-prev">Next</div>
                    </div>
                </div>
                {/* Premum Deals*/}
                <div className="product-container">
                    <div className="poduct-row">
                        <div className="products-label">
                            <h1 className="product-lebal-h1">Tranding Products</h1>
                        </div>
                        <div className="product-sub-row">
                            <div className="product-line">
                                <div className="button">
                                    <div className="left-ri">
                                        {"<"}
                                    </div>
                                    <div className="left-ri">
                                        {">"}
                                    </div>
                                </div>
                                <div className="main-itme">
                                    {
                                       ProductsArray && ProductsArray.map((i) => {
                                            return (
                                                <div className="product-slide-box" >
                                                    <NavLink to={'category'} style={{ zIndex: '1', textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                                                        <img src={i.image} alt={i.title} className="product-slide-box-" />
                                                        <div className="product-box-details">
                                                            <h1 className="product-title">{i.title}</h1>
                                                            <span className="price">Price : $<span className="rate">{i.price}</span></span>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* smart dealer */}
                <div className="Smarl-Dealer">
                    <div className="sub-smart-dealer">
                        <NavLink to={'shop'} style={{ width: '100%', height: '100%', padding: '1rem 0' }} >
                            <div className="smartDeal-cnt">
                            </div>
                        </NavLink>
                        <NavLink to={'shop'} style={{ width: '100%', height: '100%', padding: '1rem 0' }} >
                            <div className="smartDeal-cnt">
                            </div>
                        </NavLink>
                        <NavLink to={'shop'} style={{ width: '100%', height: '100%', padding: '1rem 0' }} >
                            <div className="smartDeal-cnt">
                            </div>
                        </NavLink>
                    </div>
                </div>
                {/* scheme */}
                <div className="product-scheme-container">
                    <div className="scheme-product">
                        <div className='product-detail-div'>
                            <div className="scheme-proudct-details">
                                <h1 className="product">hellow</h1>
                                <div className="product-sub-details">
                                    <p className="product-p">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quisquam aspernatur. Aspernatur, quos modi. Nostrum dolorum enim facere sapiente sit, reprehenderit neque.
                                    </p>
                                </div>
                            </div>
                            <img src={pro} alt="Scheme poduct" className="product-scheme-image" />

                        </div>
                    </div>
                    <div className="scheme-product">
                        <div className='product-detail-div'>
                            <div className="scheme-proudct-details">
                                <h1 className="product">hellow</h1>
                            </div>
                            <img src={pro} alt="Scheme poduct" className="product-scheme-image" />

                        </div>
                    </div>
                    <div className="scheme-product">
                        <div className='product-detail-div'>
                            <div className="scheme-proudct-details">
                                <h1 className="product">hellow</h1>
                            </div>
                            <img src={pro} alt="Scheme poduct" className="product-scheme-image" />

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home