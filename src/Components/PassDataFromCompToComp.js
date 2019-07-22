import React, { Component } from 'react';

class PassDataFromCompToComp extends React.Component {
    constructor(props) {
        super(props);
    }

   render() {
       return(
           <div className="mt-2">
               <p>This text will be changed from {this.props.name}</p>
           </div>
       )
   }
}

export default PassDataFromCompToComp;
