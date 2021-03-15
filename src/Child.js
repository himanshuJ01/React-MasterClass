import React from 'react';

class Child extends React.Component {
    constructor(props){
        super(props);
        this.removeItem = this.removeItem.bind(this);
    }
    removeItem(index) {
        this.props.removeItem(index);
    }
    render(){
        return (
         <ol>
         {this.props.tasks.map((item, index) => {
         return ( 
         <li key={index}>
             {item} 
         <button onClick={() => this.removeItem(index)}>
         Delete
         </button>
         </li>
         );
         })}
         </ol>
        )
        }
    }
      
       


export default Child;