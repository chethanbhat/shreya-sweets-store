import React, { Component }  from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render(){
    const {auth, authError} = this.props;
    if(auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
      <div className="row">
      <div className="col s12 l4 offset-l4">
        <div className="card white">
          <div className="card-content red-text-darken-4">
            <h5 className="center red-text text-darken-4">Sign Up</h5>
            <form onSubmit={this.handleSubmit}>
            <div className="row">
            <div className="input-field col s12">
              <input id="firstName" type="text" className="validate" onChange={this.handleChange} />
              <label htmlFor="firstName">First Name</label>
            </div>
            </div>
            <div className="row">
            <div className="input-field col s12">
              <input id="lastName" type="text" className="validate" onChange={this.handleChange} />
              <label htmlFor="lastName">Last Name</label>
            </div>
            </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
            </div>
            </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" onChange={this.handleChange} />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row center-align">
                <button className="btn red darken-4 waves-effect waves-light" type="submit" name="action">Sign Up</button>
                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
              </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)