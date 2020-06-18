import React, {Component} from 'react';

import PublicMenu from './menus/publicMenu';
import PrivateMenu from './menus/privateMenu';
import CaptainNameRegister from './modalsMain/captainName';

class Entrance extends Component { 
    constructor(props){
        super(props);
        this.state={
          showModalCaptainName:false
        }
    }
    changeModalCaptainName(){
        this.setState({
            showModalCaptainName:!this.state.showModalCaptainName
        }) 
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
    	             <a className="navbar-brand mr-5" href="/home"><i className="fas fa-anchor"></i></a>
                     {!this.props.user.userProfile
                     ? <PublicMenu {...this.props} ></PublicMenu>
                     : <PrivateMenu {...this.props} changeModalCaptainName={()=>this.changeModalCaptainName()}></PrivateMenu>
                     }
                </nav>
                {this.state.showModalCaptainName
                ? <CaptainNameRegister {...this.props} changeModalCaptainName={()=>this.changeModalCaptainName()}></CaptainNameRegister>
                : <div></div>
                }
                
            </div>
           
        )	} 
 } 
 export default Entrance;