import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import SignIn from '../Registration/signIn';
import Registration from '../Registration/registration';
import Entrance from '../Entrance/entrance';
import CountriesBox from '../countries/countriesBox';
import WorldMapBox from '../maps/worldMapBox';
// import MainPort from '../maps/mainPort';
import Home from '../Entrance/home';
import AdminBox from '../Admin/adinBox';
import MissionsAdminBox from '../Admin/missionsAdminBox';
import AddNewMission from '../Admin/addNewMission';

class Routes extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>   
                <Route exact path ='/admin' 
                            render={()=><AdminBox  {...this.props}></AdminBox>}></Route>
                <Route exact path ='/' 
                            render={()=><Entrance  {...this.props}></Entrance>}  ></Route>
                <Route exact path ='/home'  
                            render={()=><Home loading={this.props.showCountriesBox} {...this.props}></Home>} ></Route>
                <Route path='/signIn' 
                            render={SignIn}></Route>
                <Route path ='/registration' 
                            render = {()=><Registration {...this.props}></Registration>}></Route>
                <Route path='/countriesBox'  
                            render={()=><CountriesBox loading={this.props.showCountriesBox} {...this.props}></CountriesBox>}></Route>
                <Route path='/worldMap' 
                            render ={()=><WorldMapBox {...this.props}></WorldMapBox>}></Route>
                <Route path='/admin/missionAdminBox' 
                            render ={()=><MissionsAdminBox {...this.props}></MissionsAdminBox>}></Route>
                <Route path='/admin/addNewMission' 
                        render ={()=><AddNewMission {...this.props}></AddNewMission>}></Route>
            </div>
        )	} 
 } 
 export default Routes;