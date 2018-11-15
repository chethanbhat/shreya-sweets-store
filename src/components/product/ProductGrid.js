import React, {Component} from 'react'
import Card from './Card';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import CatSidebar from './CatSidebar';

class ProductGrid extends Component {
  render(){
    const {products, categoryName} = this.props;
    if(products.length > 0){
      return (
        <div className="row">
        <div className="col s2 sidebar-col red lighten-5">
          <CatSidebar />
        </div>
        <div className="col s10">
        <h3 className="center">{categoryName}</h3>
          {products && products.map((item, index) => {
              return (
                <div className="col s12 m2" key={index}>
                  <Card item={item}/>
                </div>
              )
          })}
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
  const category = ownProps.match.params.id;
  const allProducts = state.firestore.ordered.products;
  let products = [];
  let categoryName = '';
  if(allProducts){
    switch (category) {
      case 'traditional-sweets':
        products = allProducts.filter(item => item.category === 'traditional');
        categoryName = 'Traditional Sweets';
        break;
      case 'bengali-sweets':
        products = allProducts.filter(item => item.category === 'bengali');
        categoryName = 'Bengali Sweets';
        break;
      case 'dry-fruit-sweets':
        products = allProducts.filter(item => item.category === 'dry fruit');
        categoryName = 'Dry Fruit Sweets';
        break;            
      default:
        products = null;
        break;
    }
  }

  return {
      products,
      categoryName
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'products'}
  ])
)(ProductGrid);