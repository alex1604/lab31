import React, { Component } from 'react';
import Tabs from './Tabs.js';
import logo from './logo.svg';
import './App.css';

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
