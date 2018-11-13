import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignInLinks = (props) => {
  const {profile} = props;
  return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/cart"><i className="material-icons right">shopping_cart</i>Cart</NavLink></li>
        <li><NavLink to="/">Dashboard <span className="btn-floating btn-small red lighten-4 black-text center">{profile.initials}</span></NavLink></li>
        <li><a href="/#123" onClick={props.signOut}>Log Out</a></li>
      </ul>
      
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLinks);