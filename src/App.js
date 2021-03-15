import React from 'react';
import './App.css';
import TodoList from './Child';


class App extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       todos: [],
       task : ''
     }

     this.addNewTodo = this.addNewTodo.bind(this);
     this.handleChange = this.handleChange.bind(this);

  }
  addNewTodo(){
    this.state.todos.push(this.state.task);
    this.setState({ 
      todos:this.state.todos
    });
  }

  handleChange(e){
    const value = e.target.value;
    this.setState({
      task: value
    });
  }
 

  render(){

    return(
       <div className="App">
      <header className="App-header">
      <input  onChange= {this.handleChange} type="text" value={this.state.text} />
      <button onClick = {this.addNewTodo}> Add Task </button>
      <TodoList  tasks={this.state.todos}/>

      </header>
    </div>
  );
  }
}

export default App;
