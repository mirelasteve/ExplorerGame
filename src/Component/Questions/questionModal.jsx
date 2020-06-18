import React, {Component} from 'react';

class QuestionModal extends Component { 
    constructor(props){
        super(props);
        this.state={
            num:0,
            showQuestions:false,
            showFinishConv:false,
            indexOfQuestion:0,
            showHaveConvButton:true
        }
    }
    componentDidMount(){
        let min = 0;
        let max = this.props.questions.questions.length;
        let range = max - min;
        let index = Math.ceil(Math.random() * range-1);
        this.setState({
            indexOfQuestion:index,
            userBenefits:this.props.user.userBenefits,
            
        })
    }
    generateQuestions(e,answer,subtype){
        if(e.target.textContent){
            
            this.setState({
                showHaveConvButton:false
            })
            if(e.target.textContent === answer){
                let increaseBenefit = this.state.userBenefits;
                increaseBenefit[subtype]+=1;
                this.setState({
                    userBenefits:increaseBenefit
                })
               
                this.props.updateUser(increaseBenefit)
            }
        }
    this.props.loadQuestions(this.props.quest[this.state.num]);
        let num = this.state.num;
        this.setState({
            num:num+1,
            showQuestions:true
        })
        if(num>=5){
            this.setState({
                showQuestions:false,
                showFinishConv:true
            })
        }
    }

    finishMission(){
        
        this.props.changeToMap();
        this.props.updateExperience(this.props.thisMission.experience)
        this.props.updateSwc(this.props.gain)
        this.props.updateIsDoneMission(this.props.thisMission.type,this.props.user.userProfile.level)
    }
    render(){
        
        return(
            <div className='container tunisia '>

                <div className='row '>
                
                    <div className='col-2'>
                        <img src='../../../public/saler.png' alt='saler' />
                    </div>
                    
                    <div className='col-5 text-dark bold italic mt-10'>
                    {this.state.num<=5
                    ?<span className='mt-5'>
                    So the traders are asking different questions.
                    As many questions you answer correct, the quality of the production
                    will be better and you will increase your income! 
                    Different types of questions will increase your knowledge and this will increase
                    your abilities.
                    {this.state.showHaveConvButton ?
                    <button className='btn btn-danger mt-5' onClick={(e)=>this.generateQuestions(e)}>Have a conversation</button>
                    :<span></span>
                    }
                    </span>
                    :<button className='btn btn-dark mt-1'  onClick={()=>this.finishMission()}>Finish the mission</button>

                    }              
                    </div>
                    {this.state.showQuestions
                    ?<div className='col-4 row text-dark bold italic mt-10'>
                    <div className='col-12 mt-5'>{this.props.questions.questions[this.state.indexOfQuestion].q}</div>
                    {this.props.questions.questions[this.state.indexOfQuestion].aA.map((t,ti)=>
                       <div className='col-6 btn btn-outline-success' onClick={(e)=>this.generateQuestions(e,this.props.questions.questions[this.state.indexOfQuestion].a,this.props.quest[this.state.num-1])} key={ti}>{t}</div>
                   )}
                    </div>
                    :<div className='col-4'></div>
                    }

                </div>

            </div>
        )	} 
 } 
 export default QuestionModal;