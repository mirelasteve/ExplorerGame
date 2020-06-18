import React, {Component} from 'react';

class ModalUserProfile extends Component { 
    constructor(props){
        super(props);
        this.state={
            lastSeen:'18/04/2020',
            experience:this.props.user.userProfile.experience,
            showAlert:false,
            coefForLevels:4,
            userLevel:this.props.user.userProfile.level,
            zero:0,
            progressWidth: (((this.props.user.userProfile.level-1)*1000*4)-( (this.props.user.userProfile.level*1000*4)-this.props.user.userProfile.experience )/(this.props.user.userProfile.level*1000*4))*100 

            // progressWidth: this.props.user.userProfile.level>1 ? ( (this.props.user.userProfile.level-1)*1000*4-( (this.props.user.userProfile.level*1000*4)-this.props.user.userProfile.experience ))/(this.props.user.userProfile.level*1000*4)*100 : this.props.user.userProfile.experience /(this.props.user.userProfile.level*1000*4)*100
        }
    } 
    componentDidMount(){
        let levelCondition = this.state.experience > this.state.coefForLevels* this.state.userLevel*999
        let missionsCondition = true;
        if(levelCondition && missionsCondition){
            this.updateLevel()
            this.setState({
                showAlert:true
            })
        } else {
            this.setState({
                showAlert:false
            })
        }
        // progressWidth: (((this.props.user.userProfile.level-1)*1000*4)-( (this.props.user.userProfile.level*1000*4)-this.props.user.userProfile.experience )/(this.props.user.userProfile.level*1000*4))*100 
        let prevMax = (this.props.user.userProfile.level-1)*1000*4;
        let curMax = this.props.user.userProfile.level*1000*4;
        let userExp = this.props.user.userProfile.experience;

 ;

        if(this.props.user.userProfile.level === 1){
            this.setState({
                progressWidth:(userExp/curMax)*100
            })
        } else {
            this.setState({
                progressWidth:( (prevMax - (curMax - userExp) )/curMax)*100
            })
        }
        
        // this.setState({
        //     progressWidth: (this.props.user.userProfile.level-1)*1000*4-( (this.props.user.userProfile.level*1000*4)-this.props.user.userProfile.experience )/(this.props.user.userProfile.level*1000*4)*100 

        // })
        
       
        
    }
    closeAlert(){
        this.setState({
            showAlert:false
        })
    }
    updateLevel(){
        this.props.updateLevel()
        this.props.updateLevelMissions(this.props.missions[this.props.user.userProfile.level+1])
        this.setState({
            showAlert:false
        })
   
        // this.props.loadMissions(this.props.user.userProfile.level+1)
    }

    render(){
        
        return(
            <div className="card bg-light mb-3" >
              
              <div className="card-header">{this.props.user.userProfile.title} {this.props.user.userProfile.userName}</div>
              {this.state.showAlert ?
                    <div className="alert alert-dismissible alert-warning">
                        <button type="button" onClick={(e)=>this.closeAlert(e)} className="close" data-dismissName="alert">&times;</button>
                        <h2>Well done! You successfully reaeched new level</h2>
                    </div>
                    :<span></span>
                    }
              <div className="card-body">
                <div className='row'>

                    <div className='col-4'>
                    <img src='https://cdn.pixabay.com/photo/2016/03/31/20/32/military-1295843_960_720.png' alt='userProfile' widht='10%' height='12%' />
                        <div className='card-text text-dark italic'>

                            <div>
                                <h3>Experience:</h3>
                                 <span className='text-success bold'>{this.props.user.userProfile.experience}</span>
                                 
                                 <div className="progress">
                                  <div className="progress-bar progress-bar-striped bg-info"  style={{width:this.state.progressWidth+'%'}} aria-valuenow={this.props.user.userProfile.experience} aria-valuemin="0" aria-valuemax={this.props.user.userProfile.level*1000*4}><span className='text-dark'>{this.state.progressWidth} %</span></div>
                                </div>   

                             </div>

                            <p>Level: <span className='text-info bold'>{this.props.user.userProfile.level}</span></p>
                            <p>SW Coins: <span className='swc bold'>{this.props.user.userProfile.swc}</span></p>
                            <p>Ship {this.props.user.userProfile.currentShip.name} <img src={this.props.user.userProfile.currentShip.image} alt={this.props.user.userProfile.currentShip.name} width='10%' height='12%'/></p>
                            <p>Sobriquet <span className='text-secondary'>{this.props.user.userProfile.sobriquet}</span></p>
                            <p>Last Seen: {this.state.lastSeen}</p>
                            <p>Win Battle War: <span>{this.props.user.userProfile.winBattleWars}</span></p>
                            <p>Knowledge Points: <span>{this.props.user.userProfile.knowledgePoints}</span></p>

                        </div>
                        
                 
                    </div>
                    
                    <div className='col-4'>
                        <h4 className="card-title">Level {this.props.user.userProfile.level} Missions</h4>
                        {this.props.user.levelMissions[this.props.user.userProfile.level-1 ].missions.map((mission, index)=>
                            <div className='mt-3 text-dark  italic' key={index}>
                            <span className='text-danger'>{index+1} </span>
                            {mission.mission}
                            <h6 className='text-info'>Experience:{mission.experience}</h6>
                            <h6 className=' '>Accomplished:{mission.isDone ? <span className='text-success'>The mission is accomplished</span> : <span className='text-warning'>Take the mission</span> }</h6>

                            
                            </div>
                        )}
                        {/* <button className='btn btn-info' onClick={(e)=>this.updateLevel(e)}>Update level</button> */}
                    </div>

                    <div className='col-4'>
                        <h4 className="card-title">Your Benefits</h4>
                        <div>Physics {this.props.user.userBenefits.physics}</div>
                        <div>Chemistry {this.props.user.userBenefits.chemistry}</div>
                        <div>Biology {this.props.user.userBenefits.biology}</div>
                        <div>Languages {this.props.user.userBenefits.languages}</div>
                        <div>Literature {this.props.user.userBenefits.literature}</div>
                    </div>
                </div>
               </div>
                    
               

            </div>
        )	} 
 } 
 export default ModalUserProfile;