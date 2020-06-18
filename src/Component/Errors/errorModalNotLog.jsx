import React, {Component} from 'react';

class ErrorModalUserNotLog extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className='alert alert-primary'>
                    <h1>You have to log in</h1>
                    
                    <button className='btn btn-info' data-toggle="modal" onClick={(e)=>this.props.loadSignUp('facebook')}><i className='fab fa-facebook-f'></i></button>
                     
                    <button className='btn btn-warning ml-2' data-toggle="modal"  onClick={(e)=>this.props.loadSignUp('google')}><i className='fab fa-google'></i></button>
                   
            </div>
        )	} 
 } 
 export default ErrorModalUserNotLog;