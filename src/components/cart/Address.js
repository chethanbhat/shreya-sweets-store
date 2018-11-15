import React, {Component} from 'react'

class Address extends Component {
  placeOrder = () => {
    this.props.placeOrder();
  }
  render(){
    const {user} = this.props;
    return (
            <div className="card">
              <div className="card-content">
                <p>Your order will be delivered here:</p>
                <p className="grey-text text-darken-4 bold-text">
                  {user.firstName} {user.lastName} <br />
                  {user.address} <br />
                  {user.city} - {user.pincode} <br />
                  {user.state} - {user.country} <br />
                  Phone: {user.mobile} <br />
                  Email: {user.email} <br />
                </p>
              </div>
              <div className="card-action">
                <button onClick={this.placeOrder} className="btn red darken-4 waves-effect waves-light" >Place Order</button>
              </div>
            </div>
    )
  }
}

export default Address;