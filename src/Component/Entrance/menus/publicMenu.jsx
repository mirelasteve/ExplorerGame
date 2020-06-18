import React, {Component} from 'react';
import {Link} from'react-router-dom';
class PublicMenu extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className="collapse navbar-collapse" id="navbarColor03">
                      <ul className="navbar-nav mr-auto">

                        <li className="nav-item active mr-5">
                          <Link to='/Home'><i className="fa fa-ship"></i> Home</Link>
                        </li>

                        <li className="nav-item mr-5">
                            <button className='btn btn-info' data-toggle="modal" onClick={(e)=>{this.props.loadSignUp('facebook')}}><i className='fab fa-facebook-f'></i></button>
                        </li>

                        <li className="nav-item mr-5">
                            <button className='btn btn-warning' data-toggle="modal"  onClick={(e)=>{this.props.loadSignUp('google')}}><i className='fab fa-google'></i></button>
                        </li>

                        {/* <li className="nav-item mr-5">
                          <button className='btn btn-outline-primary' data-toggle="modal" onClick={(e)=>this.props.changeModalCaptainName()}>Registration</button>
                        </li> */}
                    </ul>
                      
                    </div>
        )	} 
 } 
 export default PublicMenu;