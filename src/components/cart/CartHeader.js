import React from 'react'

export default function CartHeader() {
  return (
<div className="container center">
<div className="row">
    <div className="col s3">
      <h5>Item</h5>
    </div>

    <div className="col s3">
      <h5>Product Name </h5>
    </div>

    <div className="col s1">
      <h5>Price</h5>
    </div>
    <div className="col s2">
      <h5>Quantity (Kg)</h5>
    </div>

    <div className="col s2">
      <h5>Total</h5>
    </div>
  </div>
</div>
  )
}
