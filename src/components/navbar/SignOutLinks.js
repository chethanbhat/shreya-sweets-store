import React from 'react'
import {NavLink} from 'react-router-dom';

export default function SignOutLinks() {
  return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/signin">LogIn</NavLink></li>
      </ul>
  )
}
