import React, {Component} from 'react';

import Routes from './Component/Routes/routes';


class Main extends Component { 

    constructor(props){
        super(props);
        this.state={
            showCountriesBox:false,
            loading:false
        }
    }

    componentDidMount(){
        this.props.startLoadCountries().then(()=>{
            this.setState({
                showCountriesBox:true           
            })
        });
        
           
         this.props.loadAuthUser()
        

        this.props.startLoadMissions().then(()=>{
            this.setState({
                loading:true
            })
           })
        this.props.user.size
                    ? this.props.updateLevelMissions(this.props.missions[this.props.user.userProfile.level])
                    : this.props.updateLevelMissions()
        
       this.props.loadQuestions()

    }
    render(){        
        return(
            
            <div>
            {this.state.loading 
                ? <Routes {...this.props} showCountriesBox={this.state.showCountriesBox}></Routes>
                : <div>Loading</div>
            }
            </div>
            
        )	} 
 } 
 export default Main;

