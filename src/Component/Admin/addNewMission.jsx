import React, {Component} from 'react';
import ModalAddNewMission from './modalAddNewMission';

class AddNewMission extends Component { 
    constructor(props){
        super(props);
        this.state={
            missions:[],
            showModalAddMission:false
        }
    }
    handleModal(){
       this.setState({
            showModalAddMission:!this.state.showModalAddMission
        })
    }
    
    render()
   
    {
   
     
        return(
            <div className='container'>
                {this.state.showModalAddMission
                ?<ModalAddNewMission {...this.props} handleModal={()=>this.handleModal()}></ModalAddNewMission>
                :<button className='btn btn-outline-light mb-3' onClick={(e)=>this.handleModal()}>Add New Mission</button>
            }
                {this.props.missions.map((mission,keyMission)=>
                 mission ?
                <div key={keyMission}>
                    <h5 className='bg-light h5'>Missions for level {mission.level}</h5>
                    <div className='row' key={keyMission}>
                    
                    {mission.missions.map((el,elKey)=>
                    <div className='col-3'key={el.country +el.type+elKey}>
                        
                        <ul className='list-group' >
                            <li className='list-group-item list-group-item-primary bold'>{el.type}</li>
                            <li className='list-group-item list-group-item-primary italic text-capitalize'>{el.mission}</li>
                            <li className='list-group-item list-group-item-primary'>{el.country}</li>
                            <li className='list-group-item list-group-item-success'>{el.type}</li>
                            <li className='list-group-item list-group-item-info'>{el.experience}</li>
                            <li className='list-group-item list-group-item-danger'>{el.kilos}</li>
                        </ul>
                    </div>
                        
                    )}
                    
                </div>
                </div>
                :<span></span>
               
                
                )}
            </div>
        )	} 
 } 
 export default AddNewMission;