import React, { Component } from 'react';

class Tabs extends Component {
  constructor(props) {
		super(props);  // basklassens konstruktor
		this.state = {
      currentTab : 'tab1',
      };
    this.showTab = this.showTab.bind(this);
    this.changeTab = this.changeTab.bind(this);

	}
  render() {
    let tabContent;
    switch (this.state.currentTab){
      case 'tab1':
        tabContent = 'In tab 1 you would normally find information about Uncle David`s Recipees website. However, the website is not functional yet.'
        break
      case 'tab2':
        tabContent = 'In tab 2 you would normally find information about Google and its news. However, the website is not functional yet.'
        break
      case 'tab3':
        tabContent = 'In tab 3 you would normally find information about the Weather app AccuWeather. However, the website is not functional yet.'
        break
        default:
        tabContent = 'In tab 1 you would normally find information about Uncle David`s Recipees website. However, the website is not functional yet.'
        
      }
    return (
          <div id="tabMenu">
            <div id="nav">
              <div className="tab" id="tab1" onClick={this.changeTab}>Tab 1</div>
              <div className="tab" id="tab2" onClick={this.changeTab}>Tab 2</div>
              <div className="tab" id="tab3" onClick={this.changeTab}>Tab 3</div>
            </div>
            <div id="content">{tabContent}</div>
            <button type="button" onClick={this.showTab}>CLICK ME</button>
          </div>
    );
  }
  changeTab = event => {
    this.setState({currentTab: event.target.id});
   }
   showTab() {
    console.log(this.state.currentTab);
   }
  /*changeTab(event) {
    this.setState({currentTab: event.target.id});
    console.log(this.state.currentTab)
	}*/
}

export default Tabs