import React from 'react';
import {Link} from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="container center thank-you">
      <h3>Thank you, Your order has been processed.</h3>
      <p>We will call your registered mobile number to confirm your order.</p>
      <div className="btn-grp">
        <Link className="btn red darken-4" to="/dashboard">Dashboard</Link>
        <Link className="btn red darken-4" to="/products">Continue Shopping</Link>
      </div>
    </div>
  )
}
