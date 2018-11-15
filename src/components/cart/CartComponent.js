import React, {Component} from 'react';
import {capitalize} from 'underscore.string';

class CartComponent extends Component {
state = {
  item: this.props.item
}
removeFromCart = (e) => {
  e.preventDefault();
  this.props.removeFromCart(this.state.item);
}
render(){
  const {item} = this.props;
  return (
  <div className="container cart-component center card z-depth-1">
    <div className="row cart grey-text-darken-4">
      <div className="col s3">
        <img className="cart-product-img" src={`/${item.src}`} alt={item.name} />
      </div>
      <div className="col s3 center">
        <h5>{item.name}</h5>
        <p>({capitalize(item.category)} Sweets)</p>
      </div>
      <div className="col s1">
        <p>{item.price}/Kg</p>
      </div>
      <div className="col s2">
      <div className="quantity">
        <a href="/" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
        <span className="cart-item-qty">250</span>
        <a href="/" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></a>
        </div>
      </div>
      <div className="col s2">
        <p>Rs 200 </p>
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

export default CartComponent;