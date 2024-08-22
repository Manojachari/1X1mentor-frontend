import React from 'react';
import '../styles/Payment.css';

function Payment() {
  const handlePayment = () => {
    alert("Your payment is successful");
    window.location.href = '/';
  };

  return (
    <div className="payment-container">
      <h2 className="payment-heading">Complete Payment</h2>
      <p className="payment-description">Payment for your session is in progress...</p>
      <button className="payment-button" onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Payment;
