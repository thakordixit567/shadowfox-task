import React, { useState } from "react";
import { Link } from "react-router-dom";

const search = ({ product, Gridlist }) => {
  const [searchTerm, setsearchTerm] = useState("");
  const filteredProducts = product.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          defaultValue={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <button type="submit">
            <i className="icofont-search-2"></i>
        </button>
      </form>

      <div>
        {
          searchTerm && filteredProducts.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className="d-flex gap-3 p-2">
                <div>
                  <div className="pro-thumb h-25">
                     <img src={product.img} alt="" width={70} className="flex-{grow|shrink}-0"/>
                  </div>
                </div>
                 <div className="product-content">
                  <p>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </p>
                  <h6>₹{product.price}</h6>
                 </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default search;
