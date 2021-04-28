import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      list: ['book', 'bike', 'beer', 'bag'],
      userInput:''

    }
  }

  captureUserInput(filter) {
    this.setState({userInput:filter})
  }


  render() {
  
    let displayList = this.state.list.filter((e, index) => {
      return e.includes(this.state.userInput);
    }).map((e, index) => {
      return <h2 key={index}>{e}</h2>;
    })
    return (
      <div className="App">
        <input onChange={(e)=>this.captureUserInput(e.target.value)}type="text" />
        {displayList}
      </div>
    );
  
  }
}

export default App;
