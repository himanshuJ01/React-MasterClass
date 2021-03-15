import React from 'react';

class Child extends React.Component {
    render(){
        const nameList = this.props.names.map((i, index) => {
               return <h1 key = {index}>{i}</h1>
           })

        return(
           
           <h1>{nameList} </h1> 
        )

    }
}

export default Child;