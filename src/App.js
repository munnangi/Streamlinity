import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Categories from './Components/Categories';
import CategoryItems from './Components/CategoryItems';

class App extends Component {
  render() {
    return (
      <div>
          <h1>Menu Categories</h1>
          <Categories />
          <CategoryItems />
      </div>
    );
  }
}

export default App;
