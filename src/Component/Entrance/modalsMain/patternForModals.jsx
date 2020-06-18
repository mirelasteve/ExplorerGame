import React, {Component} from 'react';
import ModalShopShips from '../../Ships/modalShopShips';
import ModalUserProfile from '../../User/modalUserProfile';
import WorldMapBox from '../../maps/worldMapBox';
import ModalAgriculture from '../../Agriculture/modalAgriculture';
import ModalManufacturing from '../../Manufacturing/modalManufacturing';
import ModalDiplomacy from '../../Diplomacy/modalDiplomacy';
import ModalHealthCenter from '../../HealthCenter/healthCenter';

class PatternsForModals extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){

    }
    changeDisplay(){        
        this.props.changeDisplay();
    }
    isEmpty(obj){
        return Object.keys(obj).length;

    }
    renderComponent(){

        switch(this.props.modal){
            case 'shopBoat': return (<ModalShopShips {...this.props}></ModalShopShips>)
            case 'myProfile':return (<ModalUserProfile {...this.props}></ModalUserProfile>)
            case 'mapWorld': return (<WorldMapBox {...this.props}></WorldMapBox>)
            case 'grocery' : return (<ModalAgriculture {...this.props}></ModalAgriculture>)
            case 'manufacturing': return (<ModalManufacturing {...this.props}></ModalManufacturing>)
            case 'diplomacy': return(<ModalDiplomacy {...this.props}></ModalDiplomacy>)
            case 'healthCenter': return(<ModalHealthCenter {...this.props}></ModalHealthCenter>)
            default : return(<div></div>)
        }
        
    }
    render(){
               
       return(
        <div className={this.props.display + 'children-Fz-85 p-0 m-0'} tabIndex='-1'>
          {this.renderComponent()}
          <button className='btn btn-warning border border-light children-Fz-85' onClick={()=>this.props.changeDisplay()}>Close</button>

        </div>
        )	} 
 } 
 export default PatternsForModals;