import React from 'react';

class Child extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){

        return(
           <>
           <h1>{this.props.value} </h1> 
           <h1>{this.props.text} </h1> 
           </>
        )

    }
}

export default Child;