import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list:['book','bike','beer','bag']
    }
  }

  render() {
    let displayList = this.state.list.map((e, index) => {
      return <h2 key={index}>{e}</h2>;
    })
    return (
      <div className="App">
        <h2>{displayList}</h2>
      </div>
    );
  }
}
  

export default App;
