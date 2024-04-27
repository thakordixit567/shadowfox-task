import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ProductDispaly = ({item}) => {
    //console.log(item);
    const desc = "In ecommerce, specifically, they're the blurbs of text on product pages that tell customers about your product. A good product description describes your product's features and benefits."
    const {name, id ,price, seller,ratingsCount, quantity, img} = item;
    const [prequantity, setQuantity] = useState(quantity);
    const[coupon,setCoupon] = useState("");
    const[size,setSize] = useState("Select Size");
    const[color,setColor] = useState("Choose Color");

    const handleSizeChanged = (e) => {
        setSize(e.target.value);
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleDecrese = () => {
         if(prequantity > 1){
            setQuantity(prequantity - 1 )
         }
    }

    const handleIncrease = () => {
       setQuantity(prequantity + 1 )
    }
    
    const handleSubmit = (e) => {
         e.preventDefault();  
         const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            size : size,
            color: color,
            coupon : coupon
         }      
         
         const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

         const existinProductIndex = existingCart.findIndex((item) => item.id === id);

         if(existinProductIndex !== -1){
            existingCart[existinProductIndex].quantity += prequantity;
         }else{
            existingCart.push(product);
         }

         localStorage.setItem("cart", JSON.stringify(existingCart));

         setQuantity(1);
         setSize("Select Size");
         setColor("Choose Color");
         setCoupon("");
    }
  return (
    <div>
     <div>
        <h4>{name}</h4>
        <p className="rating">
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <i className="icofont-star"></i>
            <span>{ratingsCount} Review</span>
        </p>
        <h4>₹{price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>

     </div>
     <div>
        <form onSubmit={handleSubmit}>
              {/*For Size */}
            <div className="select-product size">
                <select value={size} onChange={handleSizeChanged}>
                    <option>Select Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="Extra Large">Extra Large</option>
                    
                </select>
                <i className="icofont-rounded-down"></i>
            </div>

             {/*For Color*/}
            <div className="select-product color">
                <select value={color} onChange={handleColorChange}>
                    <option>Choose Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Pink</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    
                </select>
                <i className="icofont-rounded-down"></i>
            </div>

             {/*Cart Count */}
              <div className="cart-plus-minus">
                <div className='dec qtybutton' onClick={handleDecrese}>-</div>
                <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} 
                 onChange={(e) => setQuantity(parseInt(e.target.value, 10))}/>
                <div className='inc qtybutton' onClick={handleIncrease}>+</div>
              </div>

              <div className="discount-code mb-2">
                <input type="text" placeholder='Enter Coupon Code Here'onChange={(e) => setCoupon(e.target.value)}/>
              </div>

              <button type='submit' className='lab-btn'>
                  <span>Add To Cart</span>
              </button>
              <Link to="/cart-page" className='lab-btn bg-primary'>
                  <span>Check Out</span>
              </Link>
        </form>
     </div>
    </div>
  )
}

export default ProductDispaly
