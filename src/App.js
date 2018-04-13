import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './components/CountryList/CountryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountryList />
      </div>
    );
  }
}

export default App;
