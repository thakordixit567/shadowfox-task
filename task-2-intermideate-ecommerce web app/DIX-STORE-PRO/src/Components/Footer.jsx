import React from "react";
import { Link } from "react-router-dom";

const title = "About DixStore";
const desc =
  "The DixStore is a one of the largest eCommerce store in the world.Here in this platform various diffrent shoping items is available. ";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    iconName: "icofont-google-map",
    text: "New York, USA.",
  },
  {
    iconName: "icofont-phone",
    text: "+880 123 456 789",
  },
  {
    iconName: "icofont-envelope",
    text: "info@shopcart.com",
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "#",
    className: "facebook",
  },
  {
    iconName: "icofont-twitter",
    siteLink: "#",
    className: "twitter",
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "#",
    className: "linkedin",
  },
  {
    iconName: "icofont-instagram",
    siteLink: "#",
    className: "instagram",
  },
  {
    iconName: "icofont-pinterest",
    siteLink: "#",
    className: "pinterest",
  },
];

const ItemList = [
  {
    text: "All Products",
    link: "/shop",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Policy",
    link: "#",
  },
  {
    text: "FAQs",
    link: "/about",
  },
];

const quickList = [
  {
    text: "Summer Sessions",
    link: "#",
  },
  {
    text: "Events",
    link: "#",
  },
  {
    text: "Gallery",
    link: "#",
  },
  {
    text: "Forums",
    link: "#",
  },
  {
    text: "Privacy Policy",
    link: "#",
  },
  {
    text: "Terms of Use",
    link: "#",
  },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
         <a href="#">@DixStore Greetings! #HTML_Template</a>
       
      </p>
    ),
  },
  {
    iconName: "icofont-twitter",
    desc: (
      <p>
        <a href="#">@DixStore Hey! #HTML_Template</a> 
      </p>
    ),
  },
];

const footerbottomList = [
  {
    text: "Faculty",
    link: "#",
  },
  {
    text: "Staff",
    link: "#",
  },
  {
    text: "Students",
    link: "#",
  },
  {
    text: "Alumni",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                     <div className="content">
                        <p>{desc}</p>
                        <ul className="lab-ul office-address">
                           {
                            addressList.map((val, i) => (
                                <li key={i}>
                                     <i className={val.iconName}>{val.text}</i>   
                                </li>
                            ))
                           }
                        </ul>
                        <ul className="lab-ul social-icons">
                           {
                            socialList.map((val, i) => (
                                <li key={i}>
                                  <a href="#" className={val.className}><i className={val.iconName}>{val.text}</i></a>      
                                </li>
                            ))
                           }
                        </ul>
                     </div>
                  </div>
                </div>
              </div>
            </div>
              
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{ItemTitle}</h4>
                    </div>
                     <div className="content">
                        <ul className="lab-ul office-address">
                           {
                            ItemList.map((val, i) => (
                                <li key={i}>
                                    <a href="#">{val.text}</a>   
                                </li>
                            ))
                           }
                        </ul>
                        
                     </div>
                  </div>
                </div>
              </div>
            </div>
                
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{quickTitle}</h4>
                    </div>
                     <div className="content">
                        <ul className="lab-ul office-address">
                           {
                            quickList.map((val, i) => (
                                <li key={i}>
                                    <a href="#">{val.text}</a>   
                                </li>
                            ))
                           }
                        </ul>
                        
                     </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="footer-item twitter-post">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                     <div className="content">
                        <ul className="lab-ul office-address">
                           {
                            tweetList.map((val, i) => (
                                <li key={i}>
                                    <i className={val.iconName}>
                                        {
                                           val.desc 
                                        }
                                        </i>  
                                </li>
                            ))
                           }
                        </ul>
                        
                     </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


        <div className="footer-bottom">
            <div className="container">
                <div className="section-wrapper">
                    <p>&copyright; 2023 <Link to="/"> Dix Store</Link> Made By <a href="/" target="_blank">DIXIT T</a></p>
                    <div className="footer-bottom-list">
                        {
                            footerbottomList.map((val, i) => (
                                <a href="#" key={i}>{val.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
            </div>       
    </footer>
  );
};

export default Footer;
