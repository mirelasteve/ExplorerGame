import React, {Component} from 'react';
import AnimatedShip from './animatedShip';
import QuestionBox from '../Questions/questionBox';


class WorldMapBox extends Component { 
    constructor(props){
        super(props);
        this.state={
            windowX:window.innerWidth,
            windowY:window.innerHeight,
            cx:43.5,
            cy:27,
            shipArrays:[],
            showMap:false,
            transform:1,
            duration:this.props.countryInfo.duration,
            scale:0,
            path:this.props.countryInfo.coordinates.path,
            fill:'freeze',
            repeatCount:'1',
            showQuestions:false

        }
        // this.changeToMap = this.changeToMap.bind(this)
        
    }
    componentDidMount() {
        this.showShips();
        
        setTimeout(()=>{ 
            this.setState({
                showQuestions:true
            })
            
            
        }, this.props.countryInfo.duration*540);
      }
      handleEvent(e) {
        
        
      }

    showShips(){
        let shipArrays =[];
        for(let i =0; i<=100;i+=5){
            
           shipArrays
           .push(<circle key={i+'ship'} className='img-fluid' cx={i+'%'} cy='25%'  r="0.08" stroke="blue" strokeWidth="0.3" fill="yellow" ></circle>
         
        )
        }
        this.setState({
            shipArrays:shipArrays,
            showMap:true
        })
        // shipArrays.map((ship,shipKey)=>{  <p>Hello</p> })
        
    }
    TransformByScroll(e){
        if(e.deltaY>0){
            if(this.state.transform>=0.95){
                let newScale = this.state.transform-0.1;
                this.setState({
                    transform:newScale
                })
            }
            
        } else {
            if(this.state.transform<=1.1 ){
                let newScale = this.state.transform + 0.1;
                this.setState({
                    transform:newScale
                })
            }
            
        }
    
    }
   
  changePath(){
        this.setState({
            // path:'M0,0 C-0.1,-0.1 -0.05,-0.4 0,-0.5 Z',
            path:this.props.countryInfo.coordinates.returnPath,
            duration:5,
            repeatCount:'1',
            cx:this.props.countryInfo.coordinates.cx,
            cy:this.props.countryInfo.coordinates.cy
            
        });
   
    }
    changeToMap(){
        
        
        this.setState({
            showQuestions:false
        });
        this.changePath();
        setTimeout(()=>{ 
            this.setState({
                showMap:false
            })
           
            
        }, this.props.countryInfo.duration*480);
        
            }
    render(){
    //    
       
        
        return(  
            <div className='' >  
                {this.state.showQuestions
                ? <QuestionBox {...this.props} changeToMap={()=>this.changeToMap()}></QuestionBox>
                :
                this.state.showMap ?
                    <div className='container '  >
                <div className='row  '    >
                {/* <div className='col-1'></div> */}
                {/* <button className='btn btn-info' onClick={(e)=>this.changePath(e)}>O</button> */}
                <div className='col-12  pl-0 overflow-hidden' onWheel={(e)=>this.TransformByScroll(e)}>
                    <svg  className=' border border-primary worldMap svgA '  style={{transform: 'scale('+this.state.transform+')'}}  width='100%' height='100%' viewBox="0 0 30 13.5" >
                    {/* {this.state.shipArrays.map((ship, shipKey)=> ship)} */}
                      {/* {this.showShips()} */} 

                        {/* <circle   className='img-fluid' cx='23.5%' cy='27%'  r="0.005" stroke="plum" strokeWidth="0.3" fill="yellow" >
                        <animate  attributeName="cx" dur='4s'  values='0;10;20'  repeatCount='indefinite'/>    
                        </circle> */}

                        <AnimatedShip 
                        cx={this.state.cx}
                        cy={this.state.cy}
                        dur={this.state.duration+'s'} 
                        path={this.state.path} 
                        fill={this.state.fill} 
                        repeatCount={this.state.repeatCount}></AnimatedShip>

                        {/* <circle   className='img-fluid' cx='43.5%' cy='27%'  r="0.005" stroke="blue" strokeWidth="0.3" fill="yellow" >
                            <animateMotion dur={this.state.duration+'s'} attributeName='cx' repeatCount="1"
                               ]/+*               path={this.state.path}   />
                        </circle> */}

                        <circle className='img-fluid' cx={this.props.countryInfo.coordinates.cx+'%'} cy={this.props.countryInfo.coordinates.cy+'%'}   r="0.005" stroke="plum" strokeWidth="0.3" fill="yellow" >

                         </circle>
                    
                    </svg>
                    
                        </div>

                        {/* <div className='col-1'></div>  */}
                     </div>
                     </div>
                    :<div></div>
                       
                }
                
                   


        </div>)	} 
 } 
 export default WorldMapBox;