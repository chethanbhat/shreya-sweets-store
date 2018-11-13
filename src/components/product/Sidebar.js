import React from 'react'

export default function SideNav() {
  return (
   <div className="sidebar">
     <h5 className="center sidebar-heading">Select Categories</h5>
     <form action="#">
    <div className="checkbox-div">
      <label>
        <input type="checkbox" class="filled-in"/>
        <span className="black-text">Traditional</span>
      </label>
    </div>
    <div className="checkbox-div">
      <label>
      <input type="checkbox" class="filled-in"/>
        <span className="black-text">Bengali</span>
      </label>
    </div>
    <div className="checkbox-div">
      <label>
      <input type="checkbox" class="filled-in"/>
        <span className="black-text">Dry Fruits</span>
      </label>
    </div>
    <div className="checkbox-div">
      <label>
      <input type="checkbox" class="filled-in"/>
        <span className="black-text">Namkeens</span>
      </label>
    </div>
  </form>
        
   </div>
  )
}
