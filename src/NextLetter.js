import React from 'react';

//under construction
class NextLetter extends React.Component {
  constructor(props) {
    super(props);
    this.checkInput = this.checkInput.bind(this);
    this.newNumber = this.newNumber.bind(this);
    this.clear = this.clear.bind(this);
    this.state = { value: '', number: 1, original: '' };
  }
  newNumber(event) {
    if (event.target.value == null || event.target.value == undefined || event.target.value == 0) {
      this.setState({ number: 1 });
    } else {
      this.setState({ number: Number(event.target.value) })
    }
  }
  clear() {
    this.setState({ value: '' })
  }
  checkInput(event) {
    let originalText = this.state.original + event.key;
    this.setState({original: originalText})
    let x = event.charCode;
    let xz;
    if (this.state.number == 1) {
      if (x === 122) { xz = 97 } //maybe good to add ternery operator here
      else if (x === 90) { xz = 65 }
    } else {
        if (x + this.state.number <= 126) {
          xz = x + this.state.number
        } else {
            let remaining = 126 - x;
            let tempNumber = this.state.number - remaining;
            xz = 31 + tempNumber;
          }
      };
    let nextLetter = String.fromCharCode(xz);
    this.setState({ value: this.state.value + nextLetter })
  }

  render() {
    return (
      <div id="nextletterDiv">
        <p>CAESAR CIPHER YOUR TEXT</p>
        <label for="#caesarnumber">Enter distance factor for complementary characters:</label>
        <input id="caesarnumber" type="number" onChange={this.newNumber} />
        <label for="#caesar">Type here for ciphering:</label>
        <textarea id="caesar" value={this.state.value} onKeyDown={this.checkDelete} onKeyPress={this.checkInput} /> <button id="clearBtn" onClick={this.clear}>Clear</button>
        <p>Original text: {this.state.original}</p>
      </div>
    )
  }

}

export default NextLetter;
