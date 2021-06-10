import React, {Component} from 'react';
import './App.css';
import Todo from "./Todo"

class App extends Component{
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
    this.handleAdd = this.handleAdd.bind(this);

  }

  handleInput(value) {
    this.setState({ input: value })
  }
  handleAdd() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input:""
    })
  }

  render() {
    let list = this.state.list.map((e, i)=> {
      return <Todo key={i} task={e} />
    })


    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            placeholder='New task'
            value={this.state.input}
            onChange={e=>this.handleInput(e.target.value)}
          />
          <button onClick={this.handleAdd}>Add Task</button>
        </div>
        <br/>
        {list}
    </div>
    )
  }
}
export default App;
