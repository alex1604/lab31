import React from 'react';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loginout : true
    };
    this.logInOut = this.logInOut.bind(this);
  }
  //funktion för button
  logInOut(event){
    this.setState({ loginout: !this.state.loginout })
  }

  render(){
    let txt, msg, greating;
    if(this.state.loginout){
      txt= 'in';
      msg= 'out';
      greating= ' back';
    }else{
      txt= 'out';
      msg='in';
      greating='';
    }
    return (
       <div>
        <button className='loginBtn' onClick={this.logInOut}>Log{txt}</button>
        <div className="message">You are now logged {msg}. Welcome{greating}!</div>
       </div>
      );
  }
}

export default Login;
