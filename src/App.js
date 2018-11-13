import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Products from './components/product/Products';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import CheckOut from './components/cart/CheckOut';
import Footer from './components/footer/Footer';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import ProductGrid from './components/product/ProductGrid';



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="wrapper">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}  />
              <Route path="/products" component={Products}  />
              <Route path="/product/:id" component={Product}  />
              <Route path="/category/:id" component={ProductGrid}  />
              <Route path="/cart" component={Cart}  />
              <Route path="/checkout" component={CheckOut} />
              <Route path="/signin" component={SignIn}  />
              <Route path="/signup" component={SignUp}  />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
