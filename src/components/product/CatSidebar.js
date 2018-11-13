import React from 'react';
import {NavLink} from 'react-router-dom';

export default function catSidebar() {
  return (
   <div className="sidebar">
     <h5 className="center sidebar-heading">Categories</h5>
      <div className="collection sidebar-collection">
        <NavLink to="/category/traditional-sweets/" className="collection-item">Traditional Sweets</NavLink>
        <NavLink to="/category/bengali-sweets/" className="collection-item">Bengali Sweets</NavLink>
        <NavLink to="/category/dry-fruit-sweets/" className="collection-item">Dry Fruit Sweets</NavLink>
        <NavLink to="/products/" className="collection-item">All Products</NavLink>
      </div>
   </div> 
  )
}
