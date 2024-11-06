import React, { useContext } from 'react'
import '../../Css/Category.css'
import tv from '../../Assets/tv.jpg'
import { NavLink } from 'react-router-dom'
import EcommContext from '../../ContextApi/EcommContext'
const Category = () => {
  const { categoryProducts , selectItem , setSelectItem } = useContext(EcommContext);
  return (
    <>
      <main>
        <div className="Category-page">
          <div className="top-page">
            <h1 className="page-h1">Product Type</h1>
            <span className="item-number">11 items</span>
          </div>
          <div className="product-main">
            <div className="product-row">
              {
                categoryProducts && categoryProducts.map((i) => {
                  return (
                    <NavLink to={'../shop'} onClick={()=>setSelectItem(i)} >
                      <div className="product-div">
                        <div className="product-image">
                          <img src={i.image} alt="" className="product-img" />
                        </div>
                        <div className="product-details">
                          <h1 className="product-name">{i.title}</h1>
                          <span className="Rate">${i.price}</span>
                          <h3 className="brands">{i.rating.rate} / {i.rating.count}</h3>
                        </div>
                      </div>
                    </NavLink>
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Category