import React, {Component} from 'react';

class ModalUnknownError extends Component { 
    constructor(props){
        super(props);
        this.state={
            error:'Something went wrong. Please, excese me '}
    }
    render(){
        return(
            <div>
                <h3>{this.state.error}</h3>
            </div>
        )	} 
 } 
 export default ModalUnknownError;