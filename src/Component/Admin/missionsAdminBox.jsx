import React, {Component} from 'react';

class MissionsAdminBox extends Component { 
    constructor(props){
        super(props);
        this.state={
            missions:[]
        }
    }
    componentDidMount(){
        this.props.startLoadMissions(this.props.user.userProfile.level).then(()=>{
            this.setState({
                missions:this.props.missions,
            })
        })
        
    }
    render(){
       
        
        
        return(
            
            <div className='container'>
                {this.state.missions.map((mission,index)=>
                    mission.level
                    ?
                    <div className='row'  key={index}>
                        {mission.missions.map((name,nameKey)=>
                            <div key = {nameKey} className="card text-white bg-warning rem20 ml-2">
                            <div className="card-header">Mission level:  {mission.level}</div> 
                            
                            <div className="card-body ">
                                <form>
                                        <label>Country</label>
                                        <input type="text"  className="form-control" value={name.country}/>
                                        <label>Experience</label>
                                        <input type="text"  className="form-control" value={name.experience}/>
                                        <label>Mission condition</label>
                                        <input type="text"  className="form-control" value={name.mission}/>
                                        <label>Kilos</label>
                                        <input type="text"  className="form-control" value={name.kilos}/>
                                </form>
                                </div>
                                
                                </div>
                            )}
                            </div>
                          
                  
                    
                    : <span></span>
                )}
            </div>
        )	} 
 } 
 export default MissionsAdminBox;