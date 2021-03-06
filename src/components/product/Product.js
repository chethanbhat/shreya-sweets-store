import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {capitalize} from 'underscore.string';
import {addToCart} from '../../store/actions/cartActions';


class Product extends Component {
  handleAddToCart = (e) => {
    e.preventDefault();
    this.props.addToCart(this.props.product);
  }
  render(){
    const {product, auth} = this.props;
    if(product){
      return (
      <div className="container product">
        <div className="row">
          <div className="col s6">
            <img className="product-page-img" src={product.cloudinary} alt={`${product.name}, Shreya Sweets Mangalore`}/>
          </div>
      <div className="col s6">
        <h3>{product.name}</h3>
        <h5>Category: {capitalize(product.category)} Sweets</h5>
        <h5 className="lead">Rs {product.price}/Kg</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, possimus voluptatum. Laboriosam explicabo tempora assumenda.</p>
        <div className="product-buttons">
          {
            auth.uid ? 
            (<a href="/" onClick={this.handleAddToCart} className="red darken-4 btn "><i className="material-icons right">add_shopping_cart</i>Add to Cart</a>)
            : (
              <a href="/signin" className="red darken-4 btn ">Login to add to Cart</a>
              )
          }

        </div>
      
      </div>
      
        </div>
      </div>
      )
    }
    else {
      return (
        <div className="container center">
          <p>Loading Product.....</p>
        </div>
      )
    }

  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null ; 
  if(product){
    product.id = ownProps.match.params.id;
  }
  return {
    product: product,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {collection: 'products'}
  ])
)(Product);
  