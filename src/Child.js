import React from 'react';

class Child extends React.Component {
    
    render(){
      const tasks = this.props.tasks.map((i, index) => {
         return <li key={index}>{i}</li>
      });
        return(
           <>
          <ul>{tasks}</ul>
           </>
        )
    }
}

export default Child;