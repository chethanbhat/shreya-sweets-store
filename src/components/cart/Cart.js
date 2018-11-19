import React, {Component} from 'react'
import CartComponent from './CartComponent';
import CartHeader from './CartHeader';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {NavLink} from 'react-router-dom';
import {removeFromCart,emptyCart} from '../../store/actions/cartActions';
import {Redirect} from 'react-router-dom';

class cart extends Component {
  
removeFromCart = (item) => {
  this.props.removeFromCart(item);
  const userID = this.props.auth.uid;
  const {firestore} = this.props;
  firestore.onSnapshot(`cart/${userID}/products`);
}

emptyCart = (e) => {
  e.preventDefault();
  const {products} = this.props;
  const userID = this.props.auth.uid;
  const {firestore} = this.props;
  
  this.props.emptyCart(products);
  firestore.onSnapshot(`cart/${userID}/products`);
}
  componentWillUnmount() {
    const {firestore} = this.props;
    const {userID} = this.props.auth;
    firestore.unsetListener(`cart/${userID}/products`);
  }
  render(){
    const {auth, products} = this.props;
    if(!auth.uid) return <Redirect to="/signin" />
    if(products) {
      return (
        <div className="spl-container cart-container">
          <h3 className="center">Your Cart</h3>
          <CartHeader />
          {
            products 
            ? products.map((item) => {
                return <CartComponent item={item} key={item.id} removeFromCart={this.removeFromCart} />
            })
            : null
          }
          <div className="cart-total center">
            <h5>Cart Total - Rs {this.props.grandTotal}</h5>
          </div>
          <div className="cart-page-btn-group">
            <a href="/" onClick={this.emptyCart} className="waves-effect waves-light btn grey lighten-4 grey-text text-darken-3 cart-checkout-btn"><i className="material-icons right">refresh</i>Reset Cart</a>

            <NavLink to="/checkout" className="waves-effect waves-light btn red darken-4 cart-checkout-btn"><i className="material-icons right">done</i>Check Out</NavLink>
          </div>
        </div>
      )
    } else {
      return(
        <div className="spl-container center">
          <h3>Your Cart</h3>
          <p className="flow-text">Your cart is empty. Add something !</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  const auth = state.firebase.auth;
  let products = null;
  let grandTotal = 0;
  if(state.firestore.data.cart){
    const productsObj = state.firestore.data.cart[`${auth.uid}`].products;
    if(productsObj){
      products = Object.keys(productsObj).map(i => productsObj[i]).filter(item => item)
    }
  }
  if(products){
    products.forEach(product => {
      grandTotal += product.total;
    })
  }

  return {
    auth,
    products,
    grandTotal
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => dispatch(removeFromCart(item)),
    emptyCart: (products) => dispatch(emptyCart(products))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [`cart/${props.auth.uid}/products`])
)(cart);