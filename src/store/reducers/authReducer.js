const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {...state, authError: null};
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return {...state, authError: action.err.message};           
    case 'LOGIN_ERROR':
      console.log('login error');
      return {...state, authError: 'Login Failed'}  
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {...state, authError: null}
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state;    
    case 'UPDATE_USER_SUCCESS':
      console.log('user data updated successfully');
      return state;  
    case 'UPDATE_USER_ERROR':
      console.log('user data update failed', action.err);
      return state;  
    default: 
      return state;  
  }
}

export default authReducer;