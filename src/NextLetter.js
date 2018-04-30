import React from 'react';

//under construction
class NextLetter extends React.Component{
  constructor(props){
    super(props);
    this.checkInput = this.checkInput.bind(this);
    this.state={ show: '',};
  }
  checkInput(event){
   let x = event.charCode;
   let xz;
   if(x === 122){ xz = 97} //maybe good to add ternery operator here
   else if(x === 90){ xz = 65}
   else {xz = x+1};
   let nextLetter = String.fromCharCode(xz);
   this.setState({show: nextLetter});
  }

  render(){
    return(
      <div className="nextletterDiv">
        <p>What is next letter in alphabet?</p>
        <input type="text" onKeyPress={this.checkInput}/>
        <p>Next letter is: {this.state.show}</p>
      </div>
    )
  }

}

export default NextLetter;
