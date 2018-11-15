import React, { Component } from 'react'

export default class EditProfile extends Component {
  state = {
    email: this.props.user.email,
    mobile: this.props.user.mobile,
    address: this.props.user.address,
    city: this.props.user.city,
    pincode: this.props.user.pincode,
    state: this.props.user.state,
    country: this.props.user.country
  }
  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
  }
  handleSave = (e) => {
    e.preventDefault();
    const {email, mobile, address, city, pincode, state, country } = this.state;
    const user = {
      email,
      mobile,
      address,
      city,
      pincode,
      state,
      country
    }
    this.props.handleSave(user);
  }
  handleCancel = (e) => {
    e.preventDefault();
    this.props.handleCancel();
  }
  render() {
    return (
      <div className="container">
        <h3 className="center">Edit Profile</h3>
        <div className="card white">
          <div className="card-content red-text-darken-4">
              <div className="dashboard-info">
                <span className="profile-headers">Email </span>
                <input id="email" type="email" className="validate profile-data" onChange={this.handleChange} defaultValue={this.state.email} />
              </div>
              <div className="dashboard-info">
                <span className="profile-headers">Mobile: (Do not prefix 0 or +91, only 10 digits) </span>
                <input id="mobile" type="number" className="validate profile-data" onChange={this.handleChange} defaultValue={this.state.mobile} />
              </div>
              <div className="dashboard-info">
                <span className="profile-headers">Address: </span>
                <input id="address" type="text" className="validate profile-data" onChange={this.handleChange} defaultValue={this.state.address} />
              </div>
              <div className="dashboard-info">
                <span className="profile-headers">City: </span>
                <input id="city" type="text" className="validate profile-data" onChange={this.handleChange} defaultValue={this.state.city} />
              </div>
              <div className="dashboard-info">
                <span className="profile-headers">Pincode: </span>
                <input id="pincode" type="number" className="validate profile-data" onChange={this.handleChange} defaultValue={this.state.pincode} />
              </div>
              <div className="dashboard-info">
                <span className="profile-headers">State: </span>
                <input id="state" type="text" className="validate profile-data" onChange={this.handleChange} defaultValue={this.state.state} />
              </div>
              <div className="dashboard-info">
                <span className="profile-headers">Country: </span>
                <input id="country" type="text" className="validate profile-data" onChange={this.handleChange} defaultValue={this.state.country} />
              </div>
              <div className="card-action">
                <div className="edit-profile-btn-grp">
                  <button onClick={this.handleCancel} className="btn grey lighten-4 grey-text text-darken-3 waves-effect waves-light" name="action">Cancel</button>
                  <button onClick={this.handleSave} className="btn red darken-4 waves-effect waves-light" >Save</button>
                </div>
              </div>

          </div>
        </div>
      </div>
    )
  }
}
