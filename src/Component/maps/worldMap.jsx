import React, {Component} from 'react';

class WorldMap extends Component { 
    constructor(props){
        super(props);
        this.state={
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
    }

    sayCoordinates(event){
     
        
    }

    render(){
        return(
            this.state.showMap ?
            <div className='container '  >
        <div className='row  '    >
            <div className='col-12  pl-0 overflow-hidden' onWheel={(e)=>this.TransformByScroll(e)}>
            <svg  className=' border border-primary worldMap svgA '  style={{transform: 'scale('+this.state.transform+')'}}  width='100%' height='100%' viewBox="0 0 30 13.5" >
            <AnimatedShip 
                cx={this.state.cx}
                cy={this.state.cy}
                dur={this.state.duration+'s'} 
                path={this.state.path} 
                fill={this.state.fill} 
                repeatCount={this.state.repeatCount}>
            </AnimatedShip>
            <circle className='img-fluid' cx={this.props.countryInfo.coordinates.cx+'%'} cy={this.props.countryInfo.coordinates.cy+'%'}   r="0.005" stroke="plum" strokeWidth="0.3" fill="yellow" ></circle>
            </svg></div>

             </div>
             </div>
            :<div></div>
        )	} 
 } 
 export default WorldMap;