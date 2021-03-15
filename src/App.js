import React from 'react';
import './App.css';
import Child from './Child';


class App extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       count :0,
       text : ''
     }
     this.IncCount = this.IncCount.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
  IncCount(){
    this.setState({ count : this.state.count + 1});
  }

  handleChange(e){
    const value = e.target.value;
    this.setState({
      text: value
    });
  }
 

  render(){

    return(
       <div className="App">
      <header className="App-header">
      <input  onChange={this.handleChange} type="text" value={this.state.text} />
      <button onClick = {this.IncCount}> Inc Count </button>
      <Child text={this.state.text} value = {this.state.count} />

      </header>
    </div>
  );
  }
}

export default App;
