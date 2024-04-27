import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import CategoryList from "../Components/CategoryList";

const title = (
  <h2>
    Search Your One Form <span>Thousands</span> Product
  </h2>
);
const desc = "We have the largest collection of products";
const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
  { iconName: "icofont-notification", text: "More then 2000 Marchent" },
  { iconName: "icofont-globe", text: "Buy Anything Online" },
];

const Banner = () => {
  const [searchinput, setsearchinput] = useState("");
  const [filteredproducts, setfilteredproducts] = useState(productData);
  //console.log(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setsearchinput(searchTerm);

    //Filtering
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredproducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <CategoryList select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your products"
              value={searchinput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search-2"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchinput &&
              filteredproducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
