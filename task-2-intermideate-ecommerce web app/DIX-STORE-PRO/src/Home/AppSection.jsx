import React from "react";
import { Link } from "react-router-dom";

const btnText = "Sign Up For Free";
const title = "Shopping Anytime, Anywhere!";
const desc =
  "An ecommerce app allows users to shop online, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.25";

const AppSection = () => {
  return (
    <div className="app-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">
            {title}
          </h2>
          <p>
            {desc}
          </p>
        </div>

        <div className="section-wrapper">
          <ul className="lab-ul">
            <li><a href=""><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
            <li><a href=""><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
