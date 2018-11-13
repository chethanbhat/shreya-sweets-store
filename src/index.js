import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {getFirestore, reduxFirestore} from 'redux-firestore';
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase';

// Import Root Reducer

// Import Firebase Config
import fbConfig from './config/fbConfig';
// Redux Store Config
import rootReducer from './store/reducers/rootReducer'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();