import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../asana-logo.png';
import Project from './Project.jsx';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo"/>
        </div>
        <Project />
      </div>
    );
  };
};

export default App;
