import React, {Component} from 'react';

class Grocery extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
        <div>
                 <i className="fa fa-shopping-basket iconSize text-primary"></i>
                {/*<i className="far fa-lemon iconSizeG lime "></i>
                <i className="fas fa-egg  iconSizeG floralWhite"></i>
                <i className="fas fa-fish iconSizeG   text-success"></i> */}
        </div>    
        
    )
    	} 
 } 
 export default Grocery;