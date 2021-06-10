import React, { Component } from 'react'

class Login extends Component{
  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
    }
    this.alertClick = this.alertClick.bind(this);
  }

  captureUserName(name) {
    this.setState({userName:name})
  }

  capturePassword(pass) {
    this.setState({password:pass})
  }

  alertClick() {
    alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
  }


  
  render() {
    return (
      <div>
        <input onChange={e => this.captureUserName(e.target.value)}
          placeholder='Username' type='text' />
        <input onChange={e => this.capturePassword(e.target.value)}
          placeholder='Password' type='text'/>
        <button onClick={this.alertClick} >Login</button>
      </div>
     
    )
  }
}

export default Login;