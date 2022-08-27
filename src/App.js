import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getProductCategories } from './redux/products/products.utils';
import ProductsPage from './pages/product/product.component';
import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/home/home.component';
import CheckoutPage from './pages/Checkout/checkout.component';
import SignIn from './pages/SignIn/signin.component';
import { BaseUrl } from './utils/appUtils';

import { withRouter, Switch, Route } from 'react-router-dom';
import SignUp from './pages/Signup/Signup.component';
import { Redirect } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { addUserToDatabase, auth } from './firebase/firebase.utils.js'
import { getCurrentUser } from './redux/user/user.actions'


class App extends Component {

  constructor(){
    super();
    this.state ={
      user: null
    }
  }

    async componentDidMount() { 
    const { getProductCategories, getCurrentUser } = this.props;
    await fetch(`${BaseUrl}categories`)
    .then(response => response.json())
    .then(data => {
      if(data.length > 9) data = data.slice(0, -4);
      getProductCategories(data);
      // addcollection('categories', data);
    }).catch(error => alert(error.message));
    
    // await getCollectionCategories().then(data => 
    //   getProductCategories(data));
      
      onAuthStateChanged(auth, user =>{
        addUserToDatabase(user);
      getCurrentUser(user);
      this.setState({user: user})
    })
  } 


  render() {
    // const array = getCollectionCategories()
    return (
      <div>
        <NavBar currentUser = {this.state.user}/>
        <Switch >
          <Route exact path='/' component={ HomePage }/>
          <Route exact path='/products' component={ ProductsPage }/>
          <Route exact path='/checkout' component={ CheckoutPage }/>
          <Route exact path='/signin'  render = {() => 
            (this.state.user ? (<Redirect to = '/'/> ) : ( <SignIn />) )
          } />
          <Route exact path='/signup' render = {() => 
            (this.state.user ? (<Redirect to = '/'/> ) : ( <SignUp />) )
          } />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getProductCategories: categories => dispatch(getProductCategories(categories)),
  getCurrentUser: user => dispatch(getCurrentUser(user))
})

export default withRouter((connect(null, mapDispatchToProps)(App)));