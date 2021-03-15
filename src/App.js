import React from 'react';
import './App.css';
import Child from './Child';


class App extends React.Component{
  constructor(props){
     super(props);
     this.props = {
       names: []
     }
  }

  render(){

    const {data} = this.props;
    return(
       <div className="App">
      <header className="App-header">
       <Child names ={data} />
      </header>
    </div>
  );
  }
}

export default App;
