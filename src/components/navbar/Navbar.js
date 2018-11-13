import React, {Component} from 'react'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component{
  render(){
    const {auth, profile} = this.props
    return (
      <nav className="red darken-4">
        <div className="container nav-wrapper">
          <Link to='/' className="brand-logo">Shreya Sweets</Link>
          {auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks /> }
        </div>
      </nav>
    )
}

}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);