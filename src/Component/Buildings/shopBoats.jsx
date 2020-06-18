import React, {Component} from 'react';

class ShopBoat extends Component { 
    constructor(props){
        super(props);
        this.state={
            showModalShopShips:false
        }
    }
    render(){
        return(
            <div>
                <i className="fa fa-ship iconSize" aria-hidden="true"></i>
            </div>
        
    )	} 
 } 
 export default ShopBoat;