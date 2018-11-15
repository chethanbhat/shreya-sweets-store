import React, {Component} from 'react'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import Address from './Address';
import AddAddress from './AddAddress';
import {updateUser} from '../../store/actions/authActions';
import {processCart, emptyCart} from '../../store/actions/cartActions';
import {Redirect} from 'react-router-dom';
import ThankYou from './ThankYou';

class CheckOut extends Component {
state = {
  addAddress : false,
  processed: false,
}
handleSave = (data) => {
  this.props.updateUser(data);
  this.setState({editMode : false})
}
placeOrder = () => {
  this.props.processCart(this.props.products)
  this.props.emptyCart(this.props.products)
  // Redirect user to dashboard
  this.setState({
    processed: true
  })
}
render(){
  const {user, auth} = this.props;
  if(!auth.uid) return <Redirect to="/signin" />
  if(this.state.processed) return <ThankYou />
  if(user.address && user.address !== ''){
    return (
      <div className="container">
        <h2 className="red-text">Checkout</h2>
        <p>We currently serve only areas of Mangalore City through Cash on Delivery.</p>
        <Address user={user} placeOrder={this.placeOrder}/>
      </div>
      )
  }
  else {
    return(
      <div className="container">
        <h2 className="red-text">Checkout</h2>
        <p>We currently serve only areas of Mangalore City through Cash on Delivery.</p>
        <AddAddress user={user} handleSave={this.handleSave} />
      </div>
    )
  }

}
}

const mapStateToProps = (state) => {
  const auth = state.firebase.auth;
  const user = state.firebase.profile;
  let products = null;
  if(state.firestore.data.cart){
    const productsObj = state.firestore.data.cart[`${auth.uid}`].products;
    if(productsObj){
      products = Object.keys(productsObj).map(i => productsObj[i]).filter(item => item)
    }
  }
  return {
    auth,
    user,
    products
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (data) => dispatch(updateUser(data)),
    processCart: (products) => dispatch(processCart(products)),
    emptyCart: (products) => dispatch(emptyCart(products))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [`cart/${props.auth.uid}/products`]))(CheckOut);