import React from 'react';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', disabled: true};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({disabled: !this.state.disabled})
  }

  render () {
    return (
      <div className="inputDiv">
        <p>Mark checkbox to write in text field</p>  
        <input type="checkbox" onChange={this.handleChange}/>
        <input type="text" disabled={this.state.disabled}/>
       </div>
    );
  }
}

export default InputField;
