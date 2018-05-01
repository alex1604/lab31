import React, { Component } from 'react';
import Tabs from './Tabs.js';
import logo from './logo.svg';
import './App.css';
import Login from './Login.js';
import InputField from './LockedInput.js';
import NextLetter from './NextLetter.js';

class App extends Component {
  constructor(props) {
    super(props);  // basklassens konstruktor
    this.state = {
      tabContent: <Login />
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <div id="tabMenu">
            <div id="nav">
              <div className="tab" id="tab1" onClick={() => { this.setState({ tabContent: <Login /> }) }}>Tab 1</div>
              <div className="tab" id="tab2" onClick={() => { this.setState({ tabContent: <InputField /> }) }}>Tab 2</div>
              <div className="tab" id="tab3" onClick={() => { this.setState({ tabContent: <NextLetter /> }) }}>Tab 3</div>
            </div>
            <Tabs thisTab={this.state.tabContent} />
          </div>
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
