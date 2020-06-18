import React, {Component} from 'react';

class GreetingMessages extends Component { 
    constructor(props){
        super(props);
        this.state={
            welcomeMessages:[`Hello explorer!!!   
            Welcome to our port!    
            Here you could become an explorer,merchant,diplomat,researcher or a pirat   `,
        `let me show you around`,
        	`
            You only have 20 000 saltwater coins`,
            'Enjoy the game'],
            numMessage:0,
        }
    }
    render(){
        return(
             <div className='col-4 mt-5 border border-light blockquote alert alert-dismissible alert-danger'>
        {this.state.welcomeMessages[this.state.numMessage]}
           <button className='col-3 btn btn-info float-right' onClick={(e)=>this.props.chancgeWelcomingMessage(e)}>Next</button> 
       </div>)	} 
 } 
 export default GreetingMessages;