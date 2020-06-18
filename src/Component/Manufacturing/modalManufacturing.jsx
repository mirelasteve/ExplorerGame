import React, {Component} from 'react';
import WorldMapBox from '../maps/worldMapBox';

class ModalManufacturing extends Component { 
    constructor(props){
        super(props);
        this.state={
            missions:[],
            level:1,
            showMenu:true
        }
    }
    componentDidMount(){
                
        let countryInfo;
        let gain ;
        
        this.props.countries.forEach(x=>{
            if(x.countryName === this.props.missions[this.props.user.userProfile.level].missions[1].country){
              countryInfo =x;
              gain = this.props.missions[this.props.user.userProfile.level].missions[1].kilos*x.mission[1].priceKilo

            }
        })
        
        this.setState({
            missions:[this.props.missions[this.props.user.userProfile.level].missions[1]],
            level:this.props.user.userProfile.level,
            countryInfo:[countryInfo],
            gain:gain
        })
        
           
    }
    showWorldMap(e,showMenu){
        this.props.updateSwc(-this.state.countryInfo[0].taxes)
        this.setState({
            
            showMenu:showMenu
        })
    }
    render(){ 
        

        
        return(
            this.state.missions.length ?
           
            <div className='mt-0 pt-0 border border-light'>
                {this.state.showMenu ?
                <div className='col-8 bg-primary text-light '>
                <div className='row'>
                    <div className='col-4'>
                        <p>For you current level {this.state.level} you have {this.state.missions.length} missions</p>
                        {this.state.missions.map((task,index)=>
                            <ul key={index} className='bold'>
                            
                                <li key={task.country}>{task.country}</li>
                                <li key={task.kilos}>{task.kilos}</li>
                                <li key={task.experience}>Experience: {task.experience}</li>

                            </ul>
                    )}
                  </div>

                  <div className='col-4'>
                        <p>Information</p>
                        {this.state.countryInfo.map((task,index)=>
                            <ul key={index+task.countryName} className='bold'>
                            
                                <li >{task.countryName}</li>
                                <li>{task.mission[1].material}</li>
                                <li>{task.mission[1].priceKilo}</li>
                                <li >{task.religion}</li>
                                <li>{task.taxes}</li>
                                <li>{this.state.missions[index].kilos*task.mission[1].priceKilo}</li>


                            </ul>
                      )}
                      </div>
    
                        <div className='col-4'>
                                <button className='btn btn-success text-dark'onClick={(e)=>this.showWorldMap(e,false)}>Take this mission</button>
                            
                        </div>
    
                      </div>
    
    </div>
    
    : <div className='mt-0'>
       <WorldMapBox countryInfo={this.state.countryInfo[0]} {...this.props} thisMission={this.props.missions[1].missions[1]} gain={this.state.gain}></WorldMapBox>
       {/* <button className='btn btn-success text-dark'onClick={(e)=>this.showWorldMap(e,true)}>Finish the mission</button> */}
    </div>
            
            
            }
    </div> 
    
    : <div>Loading</div>
        )	} 
 } 
 export default ModalManufacturing;