import React from 'react'
import { Switch, Route } from 'react-router-dom'

import About from './Components/About/About';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Products from './Components/Products/Products';
import Error from './Components/Error/Error'

import './App.css';
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path="/*" component={Error} />

      </Switch>
      {/* <Home />
      <Products />
      <About /> */}
    </div>
  );
}

export default App;
