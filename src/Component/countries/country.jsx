import React, {Component} from 'react';

class Country extends Component { 
    constructor(props){
        super(props);
        this.state={
            countryName:'',
            capital: '',
            currency:'' ,
            flag:'',
            population:'' ,
            religion:'',
            duration:'no info',
            coordinates:
            {   
                x:'0',
                y:'0',
                path:'M0,0'
                        },
            taxes:'no info',
            mission:               
                    [
                    {type:'agricultural',
                    material:'',
                    priceKilo:0
                },
                {
                    type:'manufacturing',
                    material:'',
                    priceKilo:0
                },
                {
                    type:'diplomacy',
                    material:'',
                    priceKilo:0
                },
                {
                    type:'health care',
                    material:'',
                    priceKilo:0
                }

            ],
            changeMission:false
           

            
        }
    }

   
    updateInformation(event, country){
        
        
       let update = {
        countryName:country,
        capital:this.state.capital ? this.state.capital: this.props.country.capital,
        currency:this.state.currency ? this.state.currency: this.props.country.currency ,
        flag:this.state.flag ? this.state.flag: this.props.country.flag,
        population:this.state.population ? this.state.population: this.props.country.population ,
        religion:this.state.religion ? this.state.religion: this.props.country.religion,
        taxes:this.state.taxes ? this.state.taxes: this.props.country.taxes,
        coordinates:this.state.coordinates ? this.state.coordinates: this.props.country.coordinates,
        mission:this.state.changeMission ? this.state.mission: this.props.country.mission ? this.props.country.mission : this.state.mission,
        duration:this.state.duration ? this.state.duration: this.props.country.duration,
    }
       this.props.editCountry(update);
    
       
       this.setState({
        countryName:'',
        capital: '',
        currency:'' ,
        flag:'',
        population:'' ,
        religion:'',
        duration:'',
        taxes:'',
        coordinates:'',
        mission:[{}],
        changeMission:false
       })
 }

    changeCapital(event){
        
        this.setState({
            capital:event.target.textContent
        })
    }
    ChangeCurrency(event){
        this.setState({
            currency:event.target.textContent
        })
    }
    ChangeReligion(event){
        this.setState({
            religion:event.target.textContent
        })
    }
    ChangeFlag(event){
        this.setState({
            flag:event.target.textContent
        })
    }
    ChangePopulation(event){
        this.setState({
            population:event.target.textContent
        })
    }
    ChangeTaxes(event){
        this.setState({
            taxes:event.target.textContent
        })
    }
    
    ChangeDuration(event){
        this.setState({
            duration:event.target.textContent
        })
    }

    ChangeCoordinates(event){
        let coordString = event.target.textContent.split('|');
        let x = 1*coordString[0];
        let y = 1*coordString[1];
        let path = coordString[2];
        let returnPath =coordString[3];

        let coordinates={
            cx:x,
            cy:y,
            path:path,
            returnPath:returnPath
        }
        
        this.setState({
            coordinates:coordinates
        })
    }

    loadMissions(){
     
      
    }

    changeMission(e,x){
        
        let title= e.target.title
        
        let updateMission = [...this.state.mission];
        updateMission.map(mission=>{
            if(mission.type===x.type){
                return mission[title]=e.target.textContent;
               
            } else {
                return mission
            }
        
        
        });
        this.setState({
            mission:updateMission,
            changeMission:true
        })
        
        
        

    }
    removeCountry(){
        
        
    }
    render(){
        
        
        
     if(this.props.country.mission){
        
     }
     
        return(
        <div className="col-3">
        
            <div className="card text-white bg-danger mb-3 rem20 " >
                <div className="card-header pr-0">{this.props.country.countryName} 
                <button className='btn btn-warning float-right' onClick={(e)=>this.removeCountry(this.props.country.countryName)}>
                X</button></div>
                    <div className="card-body">
                        <h4 className="card-title">Parameters</h4>
                        
                        <ul className="card-text" >

                            <li contentEditable="true" suppressContentEditableWarning={true}  onBlur={(e)=>this.changeCapital(e) }>{this.props.country.capital}</li>
                            <li contentEditable="true" suppressContentEditableWarning={true}  onBlur={(e)=>this.ChangeReligion(e)} value='religion'>{this.props.country.religion}</li>
                            <li contentEditable="true" suppressContentEditableWarning={true}  onBlur={(e)=>this.ChangePopulation(e)}>{this.props.country.population}</li>
                            {this.props.country.flag.includes('http') ?
                            <li  ><img src={this.props.country.flag} alt={this.props.country.flag} width="40" height="23"/></li>
                            :
                            <li contentEditable="true" suppressContentEditableWarning={true}  onBlur={(e)=>this.ChangeFlag(e)}>{this.props.country.flag}</li>
                            }
                            <li contentEditable="true" suppressContentEditableWarning={true}  onBlur={(e)=>this.ChangeCurrency(e)}>{this.props.country.currency}</li>
                            <h6>Taxes</h6>
                            <li contentEditable="true" suppressContentEditableWarning={true}  onBlur={(e)=>this.ChangeTaxes(e)}>{this.props.country.taxes}</li>
                            <h6>Duration</h6>
                            <li contentEditable="true" suppressContentEditableWarning={true}  onBlur={(e)=>this.ChangeDuration(e)}>{this.props.country.duration}</li>
                            
                            <h6>Coordinates</h6>
                            <li contentEditable="true" title='coordinates' suppressContentEditableWarning={true}  onBlur={(e)=>this.ChangeCoordinates(e)}>
                                {this.props.country.coordinates
                                ? <span>
                                    {this.props.country.coordinates.cx} | {this.props.country.coordinates.cy} | {this.props.country.coordinates.path} | {this.props.country.coordinates.returnPath}
                                </span>
                                : <span></span>
                            }</li>
                        </ul>
                        {this.props.country.mission 
                        ? this.props.country.mission.map(x=>{
                            return(
                                <section key={x.type} onBlur={(e)=>this.changeMission(e,x)}>
                                <h5 className='text-capitalize'><i>{x.type}</i></h5>
                                <ol>
                                    <li contentEditable="true" suppressContentEditableWarning={true} title='material'>{x.material}</li>
                                    <li contentEditable="true" suppressContentEditableWarning={true} title='priceKilo'>{x.priceKilo}</li>
                                </ol>
                                </section>
                                
                            )})
                        : this.state.mission.map((x,xI)=>{
                            return(
                                <section key={xI} onBlur={(e)=>this.changeMission(e,x)}>
                                <h5 className='text-capitalize'><i>{x.type}</i></h5>
                                <ol>
                                    <li contentEditable="true" suppressContentEditableWarning={true} title='material'>{x.material}</li>
                                    <li contentEditable="true" suppressContentEditableWarning={true} title='priceKilo'>{x.priceKilo}</li>
                                </ol>
                                </section>
                            )})}
                   </div>
                  
                    <div className="card-footer">
                        <button className='btn btn-info'  onClick={(e,country)=>this.updateInformation(e,this.props.country.countryName)} >Update</button>
                    </div>
            </div>
        </div>)	} 
 } 
 export default Country;