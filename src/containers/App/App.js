import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.props.children}
          <a href="/home"> Home </a>
          <Link to="/home"> Link </Link>
        </p>
      </div>
    );
  }
}

export default App;
