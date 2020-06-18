import React, {Component} from 'react';

class AnimatedShip extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        
        return(
            <circle   className='img-fluid' cx={this.props.cx+'%'} cy={this.props.cy+'%'}  r="0.005" stroke="red" strokeWidth="0.3" fill="yellow" >
                <animateMotion dur={this.props.dur} attributeName='cx' 
                            fill={this.props.fill}
                            repeatCount={this.props.repeatCount}
                            path={this.props.path}   />
            </circle>
        )	} 
 } 
 export default AnimatedShip;