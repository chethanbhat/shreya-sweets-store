import React, { Component } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {increaseQty, decreaseQty} from '../../store/actions/cartActions';

class ItemComponent extends Component {
  handleIncrease = (e) => {
    e.preventDefault();
    const {item} = this.props;
    if(item.qty < 1){
      item.qty += 0.25;
      item.total = item.qty * item.price;
      this.props.increaseQty(item);
      this.props.increaseQtySnapshot();
    }
  }
  handleDecrease = (e) => {
    e.preventDefault();
    const {item} = this.props;
    if(item.qty > 0.25){
      item.qty -= 0.25;
      item.total = item.qty * item.price;
      this.props.decreaseQty(item);
      this.props.decreaseQtySnapshot();
    }
  }
  render() {
    return (
      <div className="quantity">
        <a href="/" onClick={this.handleDecrease} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></a>
        <span className="cart-item-qty">{this.props.qty}</span>
        <a href="/" onClick={this.handleIncrease} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
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


const mapDispatchToProps = (dispatch) => {
  return {
    increaseQty: (item) => dispatch(increaseQty(item)),
    decreaseQty: (item) => dispatch(decreaseQty(item))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [`cart/${props.auth.uid}/products/${props.item.id}`])
)(ItemComponent);