import React, {Component} from 'react';

class ExplainingMessage extends Component { 
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
            showNextButton:true,
        }
    }
    
    chancgeWelcomingMessage(){

        let indexChange=this.state.numMessage;        
        if(indexChange < this.state.welcomeMessages.length-1){
        this.setState({
            numMessage: indexChange+1
        })
    }   else {
        this.setState({
            numMessage: indexChange+1,
            showNextButton:false
        })
    }
    }
    render(){
        return(
           <div> {/* It works */}
                    {/* {this.state.showNextButton ? 
                    <div className='col-4 mt-5 border border-light blockquote alert alert-dismissible alert-danger'>
                     
                     {this.state.welcomeMessages[this.state.numMessage]}
                        <button className='col-3 btn btn-info float-right' onClick={(e)=>this.chancgeWelcomingMessage(e)}>Next</button> 
                    </div>
                    : <div></div>} */}
            </div>
        )	} 
 } 
 export default ExplainingMessage;