import React from 'react'

export default function checkOut() {
return (
<div className="container">
  <h2 className="red-text">Checkout</h2>
  <p>We currently serve only areas of Mangalore City through Cash on Delivery.</p>

    <form>
    <h3 class="blue-text">Billing Address</h3>
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input id="address" type="text" class="validate" />
          <label for="Address">Address</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
        </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="zip" type="text" class="validate" />
          <label for="Zip">ZipCode</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="zip" type="text" class="validate" />
          <label for="Zip">ZipCode</label>
        </div>
      </div>
    
      <div class="row center-align">
            <button class="btn waves-effect waves-light" type="submit" name="action">Place Order</button>
          </div>

    </form>
  </div>
)
}