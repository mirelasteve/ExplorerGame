import React, {Component} from 'react';
import {Link} from'react-router-dom';
class PrivateMenu extends Component { 
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
                        <img src={this.props.auth.photoURL} alt='user' height='50' width='50'></img>
                        </li>

                        <li className="nav-item mr-5">
                        {(this.props.user.userProfile.userName && this.props.user.userProfile.userName !=="What is your name captain")
                        ? <h3>Ahoy, {this.props.user.userProfile.userName}</h3>
                        :<button className='btn btn-outline-primary' data-toggle="modal" onClick={(e)=>this.props.changeModalCaptainName()}>Register your name</button>
                        }
                        </li>    

                        <li className="nav-item mr-5 float-right">
                          <button className='btn btn-outline-warning' data-toggle="modal"  onClick={(e)=>this.props.loadSignOut()}>Sign Out</button>
                        </li>

                        {/* <li className="nav-item mr-5">
                          <Link to ='/countriesBox'> Add Countries </Link>
                        </li> */}

                      </ul>
                      
                    </div>
        )	} 
 } 
 export default PrivateMenu;