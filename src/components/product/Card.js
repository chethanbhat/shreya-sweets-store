import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addToCart} from '../../store/actions/cartActions';


class Card extends Component {
  state = {
    item: this.props.item
  }
  handleAddToCart = (e) => {
    e.preventDefault();
    console.log('Add to cart was pressed',this.state);
    this.props.addToCart(this.props.item);
  }
  render() {
    const {item, auth} = this.props
    if(item.id){
      return (
          <div className="card small product-card">
            <div className="card-image">
              <Link to={'/product/' + item.id}>
                <img src={`/${item.src}`} alt={`${item.name} Shreya Sweets Mangalore`}/>
              </Link>
            </div>
            <div className="card-content">
              <Link to={'/product/' + item.id}>
              <h5 className="card-product-title center">{item.name}</h5>
              </Link>
              <p className="center">{`Rs ${item.price}/kg`}</p>
              {
                auth.uid ? <a href="/" onClick={this.handleAddToCart} className="btn-floating btn waves-effect waves-light red darken-4 add-to-cart-btn"><i className="material-icons right">add_shopping_cart</i></a> : null
              }
            </div>
          </div>             
      )
    }
    else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);