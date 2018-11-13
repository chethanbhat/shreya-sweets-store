import React, {Component} from 'react'
import CardGrid from '../product/CardGrid';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class Home extends Component {
  render(){
    const {traditional, bengali, dryFruit} = this.props;
    return (
          <div className="spl-container">
            <CardGrid category="Traditional Sweets" slug="traditional-sweets" products={traditional} />
            <CardGrid category="Bengali Sweets" slug="bengali-sweets" products={bengali}  />
            <CardGrid category="Dry Fruit Sweets" slug="dry-fruit-sweets" products={dryFruit} />
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  const products = state.firestore.ordered.products;
  if(products){
    const traditional = products.filter(item => item.category === 'traditional');
    const bengali = products.filter(item => item.category === 'bengali');
    const dryFruit = products.filter(item => item.category === 'dry fruit');
    return {
      traditional,
      bengali,
      dryFruit
    }
  }
  return {}

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'products'},
  ])
)(Home)