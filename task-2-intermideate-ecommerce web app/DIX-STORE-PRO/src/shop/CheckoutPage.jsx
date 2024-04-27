import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import "../Components/modal.css";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

const CheckoutPage = () => {
  const [show, setShow] = useState(false);
  const [activeTab, setactiveTab] = useState("rupay");

  //handle tab change
  const handlechangeTab = (tabId) => {
    setactiveTab(tabId);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  //direct to home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleOrderConfirm = () => {
    alert("Your Order Placed Successfully")
    localStorage.removeItem("cart");
    navigate(from,{replace: true})
  }
  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      href="#rupay"
                      id="rupay-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="rupay"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handlechangeTab("rupay")}
                    >
                      <img
                        src="data:image/png;base64,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"
                        width="70"
                        alt=""
                      />
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "upi" ? "active" : ""
                      }`}
                      href="#upi"
                      id="upi-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="upi"
                      aria-selected={activeTab === "upi"}
                      onClick={() => handlechangeTab("upi")}
                    >
                      <img
                        src="https://img.icons8.com/?size=48&id=5RcHTSNy4fbL&format=png"
                        width="50"
                        height="50"
                        alt=""
                      />
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      href="#visa"
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handlechangeTab("visa")}
                    >
                      <img
                        src="https://img.icons8.com/?size=48&id=13608&format=png"
                        width="50"
                        height="50"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  {/*rupay content */}
                  <div
                    className={`tab-pane fade ${
                      activeTab === "rupay" ? "show active" : ""
                    }`}
                    id="rupay"
                    role="tabPanel"
                    aria-labelledby="ruapy-tab"
                  >
                    {/* rupay tab content*/}
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Debit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                            placeholder="Card Holder Name"
                          />
                        </div>
                        <div className="inputbox">
                          
                          <input
                            type="password"
                            name="number"
                            id="number"
                            className="form-control"
                            min="1"
                            max="999"
                            required
                            placeholder="Card Number"
                          />
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              min="1"
                              max="999"
                              required
                              placeholder="Card Date MM/YY"
                            />
                          </div>
                          <div className="inputbox g-6">
                            
                            <input
                              type="password"
                              name="number"
                              id="number"
                              className="form-control gap-3"
                              min="1"
                              max="999"
                              required
                              placeholder="CVV"
                            />
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*UPI content */}

                  <div
                    className={`tab-pane fade ${
                      activeTab === "upi" ? "show active" : ""
                    }`}
                    id="upi"
                    role="tabPanel"
                    aria-labelledby="upi-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>UPI PAYMENT</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                            placeholder="Enter Your Name"
                          />
                        </div>
                        <div className="inputbox">
                          
                          <input
                            type="text"
                            name="number"
                            id="number"
                            className="form-control"
                            min="1"
                            max="999"
                            required
                            placeholder="Enter UPI ID"
                          />
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </div>

                        <div className="px-5 pay">
                          <button className="btn btn-warning btn-block" onClick={handleOrderConfirm}>
                            Create Payment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabPanel"
                    aria-labelledby="visa-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Debit Card/Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required
                            placeholder="Card Holder Name"
                          />
                        </div>
                        <div className="inputbox">
                          
                          <input
                            type="password"
                            name="number"
                            id="number"
                            className="form-control"
                            min="1"
                            max="999"
                            required
                            placeholder="Card Number"
                          />
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            
                            <input
                              type="text"
                              name="number"
                              id="number"
                              className="form-control"
                              min="1"
                              max="999"
                              required
                              placeholder="Card Date MM/YY"
                            />
                          </div>
                          <div className="inputbox g-6">
                            
                            <input
                              type="password"
                              name="number"
                              id="number"
                              className="form-control gap-3"
                              min="1"
                              max="999"
                              required
                              placeholder="CVV"
                            />
                          </div>
                        </div>
                        <div className="px-5 pay">
                          <button className="btn btn-primary btn-block" onClick={handleOrderConfirm}>
                            Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-3 px-4 p-Disclaimer"><em>Payment Disclaimer :</em> In no event shall payment or partial payment by Owner for any material or service.</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
