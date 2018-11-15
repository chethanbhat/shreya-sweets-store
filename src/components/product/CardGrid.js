import React, {Component} from 'react'
import Card from './Card';
import {Link} from 'react-router-dom';

class CardGrid extends Component {
      render(){
        const {category, products, slug} = this.props; 
        return (
        <div className="card-grid grey lighten-4 z-depth-1">
          <div className="card-grid-header grey lighten-3">
            <h3 className="card-grid-title black-text">{category}</h3>
            <Link to={"/category/" + slug} className="waves-effect waves-light red darken-4 btn card-grid-btn"><i className="material-icons right">chevron_right</i>View All</Link>
          </div>
          <hr/>
          <div className="row">
            {products && products.map(item => {
                return (
                  <div className="col s12 m2" key={item.id}>
                    <Card item={item}/>
                  </div>
                )
            })}
          </div>
        </div>
        )
      }
}

export default CardGrid;