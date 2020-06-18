import React, {Component} from 'react';
import {Link} from'react-router-dom';

class AdminBox extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <div>
                    <Link to='/admin/missionAdminBox'>Mission Admin Box</Link>
                </div>
                <div>
                    <Link to='/admin/addNewMission'>Add New Mission</Link>
                </div>
                <div>
                    <Link to='/countriesBox'>  Countries Box</Link>
                </div>
                <div>
                    <Link to='/home'>Home</Link>
                </div>
                
             
            </div>
        )	} 
 } 
 export default AdminBox;