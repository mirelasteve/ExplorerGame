import React, {Component} from 'react';

class MainPort extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className='row'>
                <div className='col-3'>A</div>
                <div className='col-3'>B</div>
                <div className='col-3'>C</div>
                <div className='col-3'>D</div>
            </div>
        )	} 
 } 
 export default MainPort;