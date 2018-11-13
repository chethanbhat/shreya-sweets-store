import React, {Component} from 'react'
import Card from './Card';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import CatSidebar from './CatSidebar';

class ProductGrid extends Component {
  render(){
    const {products, categoryName} = this.props
    if(products){
      return (
        <div className="row">
        <div className="col s2 sidebar-col red lighten-5">
          <CatSidebar />
        </div>
        <div className="col s10">
        <h3 className="center">{categoryName}</h3>
          {products && products.map((item,index) => {
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
  const allProducts = state.firestore.data.products;
  let products = [];
  let categoryName = '';
  if(allProducts){
    switch (category) {
      case 'traditional-sweets':
        Object.keys(allProducts).forEach(key => {
          if(allProducts[key].category === 'traditional') {
            products.push(allProducts[key]);
          }
        });
        categoryName = 'Traditional Sweets';
        break;
      case 'bengali-sweets':
        Object.keys(allProducts).forEach(key => {
          if(allProducts[key].category === 'bengali') {
            products.push(allProducts[key]);
          }
        });
        categoryName = 'Bengali Sweets';
        break;
      case 'dry-fruit-sweets':
          Object.keys(allProducts).forEach(key => {
          if(allProducts[key].category === 'dry fruit') {
            products.push(allProducts[key]);
          }
        });
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