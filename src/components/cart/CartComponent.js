import React, {Component} from 'react';
import {capitalize} from 'underscore.string';
import ItemComponent from './ItemComponent';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class CartComponent extends Component {
state = {
  item: this.props.item,
  quantity: 250
}
removeFromCart = (e) => {
  e.preventDefault();
  this.props.removeFromCart(this.state.item);
}
increaseQtySnapshot = () => {
  const {auth, item, firestore} = this.props;
  firestore.onSnapshot(`cart/${auth.uid}/products/${item.id}`);
}
decreaseQtySnapshot = () => {
  const {auth, item, firestore} = this.props;
  firestore.onSnapshot(`cart/${auth.uid}/products/${item.id}`);
}
componentWillUnmount() {
  const {auth, item, firestore} = this.props;
  firestore.unsetListener(`cart/${auth.uid}/products/${item.id}`);
}
render(){
  const {item} = this.props;
  return (
  <div className="container cart-component center card z-depth-1">
    <div className="row cart grey-text-darken-4">
      <div className="col s3">
        <img className="circle cart-product-img" src={`${item.cloudinary}`} alt={item.name} />
      </div>
      <div className="col s3 center">
        <h5>{item.name}</h5>
        <p>({capitalize(item.category)} Sweets)</p>
      </div>
      <div className="col s1">
        <p>{item.price}/Kg</p>
      </div>
      <div className="col s2">
        <ItemComponent qty={item.qty} increaseQtySnapshot={this.increaseQtySnapshot} decreaseQtySnapshot={this.decreaseQtySnapshot} item={item} />
      </div>
      <div className="col s2">
        <p>Rs {item.total} </p>
      </div>
      <div className="col s1">
        <a href="/" onClick={this.removeFromCart}
        className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">clear</i></a>
      </div>
    </div>
  </div>
  )
}  
}

const mapStateToProps = (state) => {
  const auth = state.firebase.auth;
  return {
    auth
  }
}

export default  compose(
  connect(mapStateToProps),
  firestoreConnect((props) => [`cart/${props.auth.uid}/products/${props.item.id}`])
)(CartComponent);