import React, {Component} from 'react';
import QuestionModal from './questionModal';

class QuestionBox extends Component { 
    constructor(props){
        super(props);
        this.state={
            amountQuestions:5,
            typesQuestions:['languages','literature','politics','history','geography','biology','chemistry','physics'],
            indexArrays:[],
            subtypes:[]
        }
    }
    componentDidMount(){
       let min = 0;
       let max= this.state.typesQuestions.length;
       let range = (max-min);
       let subTypesArray = [];
       let indexArrays = [...this.state.indexArrays];
       while(indexArrays.length<this.state.amountQuestions){
           let index = Math.ceil(Math.random()*range-1);
        
           if(!indexArrays.includes(index)){
            indexArrays.push(index);
            } 

       }
       indexArrays.forEach(x=>{
            subTypesArray.push(this.state.typesQuestions[x]);
       })
       this.setState({
           subtypes:subTypesArray
       })
}

    changeToMap(){
        this.props.changeToMap()
    }
    render(){
        return(
       <div className=''>
           <QuestionModal quest={this.state.subtypes} {...this.props}></QuestionModal>
            <button className='btn btn-dark' onClick={()=>this.props.changeToMap()}>CHANGE</button>
       </div>
        
        
        )} 
 } 
 export default QuestionBox;