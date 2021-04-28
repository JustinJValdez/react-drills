import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      userInput:''
    }
  }

  captureInput(value) {
    this.setState({userInput:value})
  }


  render() {
    console.log(this.state.userInput);
    return (
    <div className="App">
      <input onChange={(e)=>{this.captureInput(e.target.value)}}>
        </input>
        <p>{this.state.userInput }</p>
      
    </div>
  );
  }
}

export default App;
