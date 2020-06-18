import React, {Component} from 'react';

class CaptainNameRegister extends Component { 
    constructor(props){
        super(props);
        this.state={
            playerName:''
        }
    }
    typeCaptainName(e){

        
        this.setState({
            playerName:e.target.value
        })
    }
    render(){
        return(
                <div className='border border-success captainName text-center'>
                    <h3>Ahoy, how to register you</h3>
                    <img  src='https://cdn4.iconfinder.com/data/icons/nautical-6/512/as_1423-512.png' alt='captain hat' height='75' width='85'/>
                    <input className='input' type='text' onInput={(e)=>this.typeCaptainName(e)}/>
                    <button className='btn btn-outline-light' onClick={(e)=>{this.props.loadRegisterCaptainName(this.props.auth.uid,this.props.user,this.state.playerName);this.props.changeModalCaptainName()}} >Register</button>
                    {/* <div>
                        <button className='btn btn-info' data-toggle="modal" onClick={(e)=>{this.props.loadSignUp('facebook',this.state.name);this.props.changeModalCaptainName()}}><i className='fab fa-facebook-f'></i></button>
                        <button className='btn btn-warning' data-toggle="modal"  onClick={(e)=>{this.props.loadSignUp('google',this.state.name);this.props.changeModalCaptainName()}}><i className='fab fa-google'></i></button>
                    </div> */}
                    
                 </div>
        )	} 
 } 
 export default CaptainNameRegister;