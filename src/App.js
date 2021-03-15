import React from 'react';
import './App.css';
import Child from './Child';


class App extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       count :0
     }
     this.IncCount = this.IncCount.bind(this);
  }
  IncCount(){
    this.setState({ count : this.state.count + 1});
  }
 

  render(){

    
    return(
       <div className="App">
      <header className="App-header" onClick={this.IncCount}>
      <button onClick = {this.IncCount}> Inc Count </button>
      <Child value = {this.state.count} />

      </header>
    </div>
  );
  }
}

export default App;
