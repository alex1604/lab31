import React, { Component } from 'react';

class Tabs extends Component {
  /*constructor(props) {
		super(props);  // basklassens konstruktor
		this.state = {
      currentTab : 'tab1',
      tabContent: props.thisTab
      };
    this.showTab = this.showTab.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }*/
  render() {
    return (
      <div id="content">{this.props.thisTab}</div>
    );
  }
  /*changeTab = event => {
    this.setState({currentTab: event.target.id});
   }
   showTab() {
    console.log(this.state.currentTab);
   }*/
  /*changeTab(event) {
    this.setState({currentTab: event.target.id});
    console.log(this.state.currentTab)
	}*/
}

export default Tabs