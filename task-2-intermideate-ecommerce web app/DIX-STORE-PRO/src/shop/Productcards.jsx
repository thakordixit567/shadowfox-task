import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../Components/Ratting'

const Productcards = ({Gridlist, product}) => {
  
  return (
    <div className={`shop-product-wrap row justify-content-center ${Gridlist ? "grid" : "list"}`}>
       {
        product.map((products, i ) => (
          <div key={i} className='col-lg-4 col-md-6 col-12'>
              <div className="product-item">
                <div className="product-thumb">
                  <div className="pro-thumb">
                    <img src={products.img} alt="" />
                  </div>

                  <div className="product-action-link">
                    <Link to={`/shop/${products.id}`}><i className='icofont-eye'></i></Link>
                    <a href="#">
                      <i className='icofont-heart'></i>
                    </a>
                    <Link to={`/cart-page`}><i className='icofont-cart-alt'></i></Link>
                  </div>
                </div>

                 <div className="product-content">
                   <h5>
                    <Link to={`/shop/${products.id}`}>{products.name}</Link>
                   </h5>
                   <p className='productRatting'>
                    <Ratting/>
                   </p>
                   <h6>₹{products.price}</h6>
                 </div>
              </div>

              <div className="product-list-item">
                <div className="product-thumb">
                  <div className="pro-thumb">
                    <img src={products.img} alt="" />
                  </div>

                  <div className="product-action-link">
                    <Link to={`/shop/${products.id}`}><i className='icofont-eye'></i></Link>
                    <a href="#">
                      <i className='icofont-heart'></i>
                    </a>
                    <Link to={`/cart-page`}><i className='icofont-cart-alt'></i></Link>
                  </div>
                </div>

                 <div className="product-content">
                   <h5>
                    <Link to={`/shop/${products.id}`}>{products.name}</Link>
                   </h5>
                   <p className='productRatting'>
                    <Ratting/>
                   </p>
                   <h6>₹{products.price}</h6>
                 </div>
              </div>


          </div>
        ))
       }
    </div>
  )
}

export default Productcards
