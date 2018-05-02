import React from 'react';

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state= {msg: '',
                 value: 0,
                 secretNumber: 0,
                 howManyGuess: 0}

    this.randomNumber = this.randomNumber.bind(this);
    this.compareNumber = this.compareNumber.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.playAgain= this.playAgain.bind(this);
  }
  componentDidMount(){ // randomNumber calls when the component rendered fist time
   this.randomNumber();

  }
  randomNumber(){ // function for secretNumber
    let randNumber = Math.floor(Math.random()*100);
    this.setState({secretNumber: randNumber})
  }
  handleInputChange(event){ //here we save value from input
    this.setState({value: event.target.value});
  }
  playAgain(event){ // reset the values and call randomNumber
    console.log("let's play again");
    this.randomNumber();
    this.setState({msg: '',
                 value: 0,
                 howManyGuess: 0});
  }
  compareNumber(event){ //function for compare guess and counting how many guesses
   console.log('value is', Number(this.state.value));
   console.log('secretnumber is', this.state.secretNumber)

     if(Number(this.state.value) === Number(this.state.secretNumber)){
     this.setState({msg: <div><strong>This is correct!</strong> You guessed  {this.state.howManyGuess} times</div>});
     }else if(this.state.value > this.state.secretNumber){
      this.setState({msg: "This is to high!", howManyGuess: this.state.howManyGuess+1});
    }else{
      this.setState({msg: "This is to low!", howManyGuess: this.state.howManyGuess+1});
    }
  }

  render(){

    return(
       <div className="gameDiv">
        <p>Can you guess the correct number between 1 and 100?</p>
        <input type="text" onChange={this.handleInputChange} />
        <button onClick={this.compareNumber}>GUESS!</button>
        <div>{this.state.msg}</div>

        <div>Your guess is: {this.state.value}</div>

        <button className="playAgainBtn" onClick={this.playAgain}>Play again</button>
      </div>
    );
  }
};

export default Game;
