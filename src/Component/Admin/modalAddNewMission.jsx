import React, {Component} from 'react';

class ModalAddNewMission extends Component { 
    constructor(props){
        super(props);
        this.state={
            missions:[
                {
                    type:'agricultural',
                    missions:[
                        {type:'agricultural',
                        isDone:false,
                    }]
                },
                {
                    type:'manufacturing',
                    missions:[
                        {
                        type:'manufacturing',
                        isDone:false
                    }]
                },
                {
                    type:'diplomacy',
                    missions:[
                        {
                        type:'diplomacy',
                        isDone:false
                    }]
                },
                {
                    type:'health care',
                    missions:[
                        {
                        type:'health care',
                        isDone:false
                    }]
                }
            ],
            kilos:'',
            choosentype:''
        }
    }
    handleParameter(e,par){
        let changeMissions = [...this.state.missions];
        changeMissions.forEach(x=>{
            if(x.type === this.state.choosentype){
                 x.missions[0][par] = e.target.value 
            }   else {
                return x
            }
        })
        this.setState({
            missions:changeMissions
        })
        
    }
    handletypes(e,choosentype){
        
        
        this.setState({
            choosentype:choosentype
        });
        
        //We have to send the data to Firebase
        
    }
    handleModal(e){
        this.props.handleModal(e);
        
        let correctedMissions = [];
         this.state.missions.forEach(x=>{
            
            let obj=x.missions[0];
            correctedMissions.push(obj)
         })
        let addingMission = {
            level: this.props.missions.length,
            missions:correctedMissions
        }
        this.props.startAddMissions(addingMission)

        
    }
    // this.props.handleModal(e)
    render(){
      
        
        return(
            <div className='border border-light mb-5'>
            <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle m-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             {this.state.choosentype ? this.state.choosentype : 'Choose the type of the mission' } 
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <h6 className="dropdown-header">types</h6>
            <ol >
              <li className="dropdown-item" onClick={(e,type)=>this.handletypes(e,"agricultural")} >Agriculture</li>
              <li className="dropdown-item" onClick={(e,type)=>this.handletypes(e,"diplomacy")} >Diplomacy</li>
              <li className="dropdown-item" onClick={(e,type)=>this.handletypes(e,"manufacturing")} >Manufactory</li>
              <li className="dropdown-item" onClick={(e,type)=>this.handletypes(e,'health care')} >Health Center</li>
            </ol>
              
            </div>
            </div>
                      <form>
            <div className="row">
                
               <div className="col-5" key='headtext'>
               <label>The headtext of the mission</label>
                 <textarea onChange={(e,par)=>this.handleParameter(e,'mission')}className="form-control" placeholder="Headtext"/>
               </div>

               
               <div className="col-3" key='continent'>
               <label>Continent</label>
                 <input type="text" onChange={(e,par)=>this.handleParameter(e,'continent')} className="form-control" placeholder="continent"/>
               </div>

               <div className="col-3" key='country'>
               <label>Country</label>
                 <input type="text" onChange={(e,par)=>this.handleParameter(e,'country')} className="form-control" placeholder="country"/>
               </div>

               <div className="col-3" key='experience'>
               <label>Experience</label>
                 <input type="text" onChange={(e,par)=>this.handleParameter(e,'experience')} className="form-control" placeholder="experience"/>
               </div>
               <div className="col-3" key='kilos'>
               <label>Kilos</label>
                 <input type="text" onChange={(e,par)=>this.handleParameter(e,'kilos')}className="form-control" placeholder="kilos"/>
               </div>
               
             </div>
                
            </form>
            <button className='btn btn-outline-light mb-5' >Add Mission</button>
            onClick={(e)=>this.handleModal(e)}
            <h3> You can follow the new missions here </h3>
            <div className='row mb-5'>
                {this.state.missions.map((mission,keyMission)=>
                mission ?
                 <div className='col-3' key={keyMission}>
                   <h3 className='h3 bg-light text-dark text-capitalize'>{mission.type}</h3>
                 {/* {mission.missions.map((el,elKey)=> */}
                 
                     
                     <ul className='list-group' >
                         <li className='list-group-item list-group-item-primary bold'>{this.state.missions[keyMission].missions[0].type}</li>
                         <li className='list-group-item list-group-item-success'>{this.state.missions[keyMission].missions[0].continent}</li>
                         <li className='list-group-item list-group-item-warning'>{this.state.missions[keyMission].missions[0].country}</li>
                         <li className='list-group-item list-group-item-success italic text-capitalize'>{this.state.missions[keyMission].missions[0].mission}</li>
                         <li className='list-group-item list-group-item-info'>{this.state.missions[keyMission].missions[0].experience}</li>
                         <li className='list-group-item list-group-item-danger'>{this.state.missions[keyMission].missions[0].kilos}</li>
                     </ul>
                
                     
                 {/* )} */}
                 
             </div>
             :<span></span>
                )}

                </div>
            </div>
        )	} 
 } 
 export default ModalAddNewMission;