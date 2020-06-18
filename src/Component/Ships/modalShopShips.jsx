import React, {Component} from 'react';

class ModalShopShips extends Component { 
    constructor(props){
        super(props);
        this.state={
            ships:[
                {name:'lugger',description:' traditional fishing boat or working craft',price:'100 000'},
                {name:'sloop',description:' sailboat with a single mast',price:'100 000'},
                {name:'chalutier',description:' fishing ship',price:'100 000'},
                {name:'ketch',description:' two-masted sailboat',price:'100 000'},
                {name:'spritsail barge',description:' sailing barge',price:'100 000'},
                {name:'pink',description:' - pinque sailing ship',price:'100 000'},
                {name:'tartan',price:'100 000'},
                {name:'galley',price:'100 000'},
                {name:'xebec',price:'100 000'},
                {name:'brig',price:'100 000'},
                {name:'caravelle',price:'100 000'},
                {name:'fregate',price:'100 000'},
                {name:'galleon',price:'100 000'},
                {name:'first rate',description:' sailing warships',price:'100 000'},
                {name:'cargo',price:'100 000'},
                {name:'the biggest sailing ship preussen',price:'100 000'},
            ]
        }
    }
    render(){
     
        return(
                <div className='col-12'>

                    <div className='row'>

                        {this.state.ships.map((ship,shipName)=>
                        <div className='col-3 alert-light text-center' key={shipName}>
                        <h4 className='bold text-danger capitalize'>{ship.name}</h4>
                        <img className='border border-dark' src='https://i.pinimg.com/originals/11/65/e2/1165e2d94545583190ff7fcac7470f21.png' alt={ship.name} width='110' height='140'/>
                        <h6 className='italic'>{ship.price}</h6>
                        </div>
                        )}
                    </div>
                </div>
            
            
           

        )	} 
 } 
 export default ModalShopShips;