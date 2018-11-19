import React, { Component } from 'react'
import {connect} from 'react-redux';
import {firestoreConnect, firebaseConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import EditProfile from './EditProfile';
import {updateUser} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';
// import axios from 'axios';

class Dashboard extends Component {
  state = {
    editMode : false,
    user: this.props.user
  }
  componentDidMount(){
    // const OTP = Math.floor(Math.random() * 10000);
    // const EMAIL_ID = 'vibsmlore@gmail.com'
    // const HASH = 'c7bedde79d8664efcd4acd2b23b6c4cc1a89dd23382a08211225b9bb7e1e34e0';
    // const NUMBER = '918078012179';
    // const MESSAGE = `Hello, Shreya Store React App. Your OTP is ${OTP}`;
    // const URL = `https://api.textlocal.in/send/?username=${EMAIL_ID}&hash=${HASH}&sender=TXTLCL&numbers=${NUMBER}&message=${MESSAGE}`;

    // axios.get(URL)
    // .then((response) => console.log('Message Sent.', response))
    // .catch((err) => console.log('Problem Sending Message.', err));
  }
  editProfile = (e) => {
    e.preventDefault();
    this.setState({editMode : true})
  }
  handleSave = (data) => {
    this.props.updateUser(data);
    this.setState({editMode : false})
  }
  handleCancel = () => {
    this.setState({editMode : false})
  }
  componentDidUpdate(prevProps){
    if(this.props.user !== prevProps.user){
      this.setState({user: this.props.user});
    }
  }
  render() {
    const {user, auth, orders} = this.props;
    if(!auth.uid) return <Redirect to="/signin" />
    if(!user) {
      return <p className="center">Loading.....</p>
    }
    if(user && this.state.editMode){
      return <EditProfile user={user} handleCancel={this.handleCancel} handleSave={this.handleSave} />
    }
    return (
      <div className="container">
        <h3 className="center">Welcome to your Dashboard</h3>
        <div className="card">
          <div className="card-content">
            <span className="card-title center">Hello {user.firstName} {user.lastName}</span>
            <p className="dashboard-info"><span className="profile-headers">Email: </span><span className="profile-data">{user.email ? user.email : '---'}</span></p>
            <p className="dashboard-info"><span className="profile-headers">Mobile: </span><span className="profile-data">{user.mobile ? user.mobile : '---'}</span></p>
            <p className="dashboard-info"><span className="profile-headers">Address: </span><span className="profile-data">{user.address ? user.address : '---'}</span></p>
            <p className="dashboard-info"><span className="profile-headers">City: </span><span className="profile-data">{user.city ? user.city : '---'}</span></p>
            <p className="dashboard-info"><span className="profile-headers">Pincode: </span><span className="profile-data">{user.pincode ? user.pincode : '---'}</span></p>
            <p className="dashboard-info"><span className="profile-headers">State: </span><span className="profile-data">{user.state ? user.state : '---'}</span></p>
            <p className="dashboard-info"><span className="profile-headers">Country: </span><span className="profile-data">{user.country ? user.country : '---'}</span></p>
            <div className="card-action">
              <a href="/" onClick={this.editProfile} className="btn red darken-4 white-text edit-profile-btn">Edit</a>
            </div>
          </div>
        </div>
        <h3 className="center">Your Orders</h3>
        {
          orders ?
            orders.map(order => {
            return(
              <div className="card grey lighten-4" key={order.id}>
                <div className="card-content grey-text text-darken-4">
                  <p className="flow-text">{order.id}</p>
                  <p className="order-products">  
                    {
                      order.products.map((product, index) => (index ? ', ': '') + product.name)
                    }
                  </p>
                  <p className="order-amount">Rs {order.total}</p>
                  <p className="order-status">{order.status}</p>
                </div>
              </div>
            )
          })
          : null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const auth = state.firebase.auth;
  const user = state.firebase.profile;
  const orders = state.firestore.ordered.orders;
  return {
    auth,
    user,
    orders
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (data) => dispatch(updateUser(data))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [`users/${props.auth.uid}/orders`, `orders`]),
  firebaseConnect()
)(Dashboard);