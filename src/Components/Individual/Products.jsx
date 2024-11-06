import React from 'react'
import '../../Css/Products.css'
import watch from '../../Assets/watch.jpg'

const Products = () => {
    return (
        <main>
            <div className="products-page">
                <div className="filter">
                    <div className="filter-box">
                        <div className="filter-category">
                            <h1 className="product-yte-name">Smart Wearable</h1>
                        </div>
                        <div className="price-filter">
                            <label htmlFor="Price">Sort by Price</label>
                            <input name="Price" type="range" min={50} max={5000} className="price-inp" />
                        </div>
                        <div className="brands-filter">
                            <div className="filter-sub">
                                <input name="samsung" type="checkbox" className="brands" />
                                <label htmlFor="samsung">Samsung</label>
                            </div>
                            <div className="filter-sub">
                                <input name="relince" type="checkbox" className="brands" />
                                <label htmlFor="relince">relince</label>
                            </div>
                            <div className="filter-sub">
                                <input name="pok" type="checkbox" className="brands" />
                                <label htmlFor="pok">pok</label>
                            </div>
                        </div>
                        <div className="brands-filter">
                        <div className="filter-sub">
                            <input name="ix" type="checkbox" className="brands" />
                            <label htmlFor="ix">above 4.5</label>
                        </div>
                        <div className="filter-sub">
                            <input name="iii" type="checkbox" className="brands" />
                            <label htmlFor="ix">above 3.5</label>
                        </div>
                        <div className="filter-sub">
                            <input name="all" type="checkbox" className="brands" />
                            <label htmlFor="ix">all</label>
                        </div>
                        <div className="filter-sub">
                            <input name="ii" type="checkbox" className="brands" />
                            <label htmlFor="ix">above 2.5</label>
                        </div>
                        </div>
                        {/* <div className="brands-filter">
                            <input type="checkbox" placeholder='Avilable' className="brands" />
                            <input type="checkbox" placeholder='Both' className="brands" />
                        </div> */}
                    </div>
                </div>
                <div className="product-display">
                    <div className="product-cat">
                        <div className="item-type-name">
                            <h1 className="product-name1">Samsung Smart Watch ..</h1>
                        </div>
                        <div className="item-sortby">
                            <ul className="sortbu-ul">
                                <li className="sortby-li">popularity</li>
                                <li className="sortby-li">price low --- high</li>
                                <li className="sortby-li">price high --- low</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-grid">
                        <div className="product-div-2">
                            <div className="product-image-1">
                                <img src={watch} alt="" className="product-imag-1" />
                            </div>
                            <div className="product-details-1">
                                <h1 className="product-name">Smart Watch</h1>
                                <span className="some-other-detials">smart , discounted</span>
                                <div className="rating-per-sells">
                                    <span className="rating">4.5</span>
                                    <span className="sells">(3000)</span>
                                </div>
                                <div className="discount">
                                    <span className="discounted-price">$95</span>
                                    <span className="old-price">($100)</span>
                                    <span className="save">5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-div-2">
                            <div className="product-image-1">
                                <img src={watch} alt="" className="product-imag-1" />
                            </div>
                            <div className="product-details-1">
                                <h1 className="product-name">Smart Watch</h1>
                                <span className="some-other-detials">smart , discounted</span>
                                <div className="rating-per-sells">
                                    <span className="rating">4.5</span>
                                    <span className="sells">(3000)</span>
                                </div>
                                <div className="discount">
                                    <span className="discounted-price">$95</span>
                                    <span className="old-price">($100)</span>
                                    <span className="save">5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-div-2">
                            <div className="product-image-1">
                                <img src={watch} alt="" className="product-imag-1" />
                            </div>
                            <div className="product-details-1">
                                <h1 className="product-name">Smart Watch</h1>
                                <span className="some-other-detials">smart , discounted</span>
                                <div className="rating-per-sells">
                                    <span className="rating">4.5</span>
                                    <span className="sells">(3000)</span>
                                </div>
                                <div className="discount">
                                    <span className="discounted-price">$95</span>
                                    <span className="old-price">($100)</span>
                                    <span className="save">5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-div-2">
                            <div className="product-image-1">
                                <img src={watch} alt="" className="product-imag-1" />
                            </div>
                            <div className="product-details-1">
                                <h1 className="product-name">Smart Watch</h1>
                                <span className="some-other-detials">smart , discounted</span>
                                <div className="rating-per-sells">
                                    <span className="rating">4.5</span>
                                    <span className="sells">(3000)</span>
                                </div>
                                <div className="discount">
                                    <span className="discounted-price">$95</span>
                                    <span className="old-price">($100)</span>
                                    <span className="save">5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-div-2">
                            <div className="product-image-1">
                                <img src={watch} alt="" className="product-imag-1" />
                            </div>
                            <div className="product-details-1">
                                <h1 className="product-name">Smart Watch</h1>
                                <span className="some-other-detials">smart , discounted</span>
                                <div className="rating-per-sells">
                                    <span className="rating">4.5</span>
                                    <span className="sells">(3000)</span>
                                </div>
                                <div className="discount">
                                    <span className="discounted-price">$95</span>
                                    <span className="old-price">($100)</span>
                                    <span className="save">5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-div-2">
                            <div className="product-image-1">
                                <img src={watch} alt="" className="product-imag-1" />
                            </div>
                            <div className="product-details-1">
                                <h1 className="product-name">Smart Watch</h1>
                                <span className="some-other-detials">smart , discounted</span>
                                <div className="rating-per-sells">
                                    <span className="rating">4.5</span>
                                    <span className="sells">(3000)</span>
                                </div>
                                <div className="discount">
                                    <span className="discounted-price">$95</span>
                                    <span className="old-price">($100)</span>
                                    <span className="save">5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Products