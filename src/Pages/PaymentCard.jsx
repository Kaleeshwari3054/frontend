import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ add this

const PaymentCard = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/paymentbutton");
  };
  // const handleRegister = () => {
  //   navigate("/whatsappform");
  // };
  // const handleRegister = () => {
  //   navigate("/whatsappform");
  // };
  return (
    <div className="mobile-payment-card">
      <div className="hero-card">
        <h5 className="hero-card-title">Choose Your Option</h5>
        <label className="hero-plan">
          <input type="radio" checked readOnly />
          <div className="hero-plan-text">
            <h6>One Day One Lakh (499 + 18% GST)</h6>
            <small>₹ 588.82</small>
          </div>
        </label>
        <div className="hero-amount-row">
          <span>Amount</span>
          <span className="hero-amount">₹ 588.82</span>
        </div>
         <button
              className="hero-btn-primary"
              onClick={handleRegister} 
            >
              Register Now
            </button>
        <button className="hero-btn-secondary">
          <i className="bi bi-share"></i> Share this page
        </button>
      </div>
    </div>
  );
};

export default PaymentCard;
