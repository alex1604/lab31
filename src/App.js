import React, { Component } from 'react';
import Tabs from './Tabs.js';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import InputField from './LockedInput.js';
import NextLetter from './NextLetter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          < Tabs />
          <Login/>
          <InputField/>
          <NextLetter/>
        </main>
      </div>
    );
  }

  /*changeTab(event) {
    this.setState({currentTab: event.target.id});
    console.log(this.state.currentTab)
	}*/
}


export default App;
