import React, { Component } from 'react';

import logo from '../logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__header__logo" alt="logo" />
          <h1 className="app__header__title">Welcome to React</h1>
        </header>
        <p className="app__intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
