import React, {Component} from 'react';
import Grocery from '../Buildings/grocery';
import FlowerShop from '../Buildings/flowerShop';
import Government from '../Buildings/government';
import ExplorerBalance from '../Buildings/explorerBalance';
import Bookstore from '../Buildings/bookstore';
import ShopBoat from '../Buildings/shopBoats';
import MyProfile from '../Buildings/myProfile';
import MapWithQuests from '../Buildings/map';
import HealthCenter from '../Buildings/healthCenter';
class HomeMenu extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
                <div className='row mb-0 root-Fz-Size'>
                
                    <div className='col-1 fz-1-6 ml-3 p-2 text-center bg-warning' onClick={(e)=>this.props.displayModal(e,'grocery')}  title='Missions about food'><Grocery></Grocery></div>
                    <div className='col-1 fz-2-7 ml-3 p-2 text-center bg-light'onClick={(e)=>this.props.displayModal(e,'manufacturing')}title='Missions about seeds,plants,flowers,herbs'><FlowerShop></FlowerShop></div>
                    <div className='col-1 fz-2-7 ml-3 p-2 text-center bg-light'onClick={(e)=>this.props.displayModal(e,'diplomacy')}title='Missions about peace, war, ministers, princess'><Government></Government></div>
                    <div className='col-1 fz-2-7 ml-3 p-2 text-center dove' onClick={(e)=>this.props.displayModal(e,'healthCenter')}><HealthCenter></HealthCenter></div>
                    <div className='col-1 fz-2-7 ml-3 p-2 text-center bg-dark' title='How much saltwater coins do you have?'><ExplorerBalance></ExplorerBalance></div>
                    <div className='col-1 fz-2-7 ml-3 p-2 text-center bookstore'  title='Missions about books, papers,dye'><Bookstore></Bookstore></div>
                    <div className='col-1 fz-2-7 ml-3 p-2 text-center shopBoat' onClick={(e)=>this.props.displayModal(e,'shopBoat')}  title='Buy ship'><ShopBoat></ShopBoat></div>
                    <div className='col-1 fz-2-7 ml-3 p-2 text-center myProfileIcon' onClick={(e)=>this.props.displayModal(e,'myProfile')}><MyProfile></MyProfile></div>
                    <div className='col-1 fz-2-7 ml-3 p-2 text-center bg-sandybrown' onClick={(e)=>this.props.displayModal(e,'mapWorl')}><MapWithQuests></MapWithQuests></div>
                    <div className='col-1  ml-3       p-2 bg-sandybrown' onClick={(e)=>this.props.displayModal(e,'mapWorl')}>Battles <h6>In process...</h6></div>
               
               </div>

        )	} 
 } 
 export default HomeMenu;