import React, {Component} from 'react'
import CatSidebar from './CatSidebar';
import Card from './Card';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

class Products extends Component {
  render(){
    const {products} = this.props
    
    if(products){
      return (
        <div className="row">
        <div className="col s2 sidebar-col red lighten-5">
          <CatSidebar />
        </div>
        <div className="col s10">
        <h3 className="center">All Products</h3>
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

const mapStateToProps = (state) => {
  const products = state.firestore.ordered.products;
  return {
    products
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'products'}
  ])
)(Products);
