import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
state = {
  email: '',
  password: '',
}
handleChange = (e) => {
this.setState({
  [e.target.id]: e.target.value
})
}
handleSubmit = (e) => {
  e.preventDefault();
  this.props.signIn(this.state);
  console.log(this.state);
}
render(){
  const {authError, auth} = this.props;
  if(auth.uid) return <Redirect to="/" />
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 l4 offset-l4">
          <div className="card white">
            <div className="card-content red-text-darken-4">
              <h5 className="center-align red-text text-darken-4">Login</h5>
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">email</i>
                    <input type="email" id="email" className="validate" onChange={this.handleChange} />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                    <input type="password" id="password" className="validate" onChange={this.handleChange} />
                    <label htmlFor="email">Password</label>
                  </div>
                </div>
                <div className="row center-align">
                  <button className="btn red darken-4 waves-effect waves-light" type="submit" name="action">SignIn
                  </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);