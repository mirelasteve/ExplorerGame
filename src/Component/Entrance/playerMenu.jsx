import React, {Component} from 'react';
import Grocery from '../Buildings/grocery';
import FlowerShop from '../Buildings/flowerShop';
import Government from '../Buildings/government';
import ExplorerBalance from '../Buildings/explorerBalance';
import Bookstore from '../Buildings/bookstore';
import ShopBoat from '../Buildings/shopBoats';
import PatternsForModals from './modalsMain/patternForModals';
import MyProfile from '../Buildings/myProfile';
import MapWithQuests from '../Buildings/map';
import HealthCenter from '../Buildings/healthCenter';

class PlayerMenu extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    displayModal(e,modal){
        this.props.displayModal(e,modal)
    }
    render(){
        return(
            <div className='row'>
                <div className='col-1 fz-1-6 ml-3 bg-warning' onClick={(e)=>this.displayModal(e,'grocery')}  title='Missions about food'><Grocery></Grocery></div>
                <div className='col-1 fz-2-7 ml-3 table-light'onClick={(e)=>this.displayModal(e,'manufacturing')}title='Missions about seeds,plants,flowers,herbs'><FlowerShop></FlowerShop></div>
                <div className='col-1 fz-2-7 ml-3 table-light'onClick={(e)=>this.displayModal(e,'diplomacy')}title='Missions about peace, war, ministers, princess'><Government></Government></div>
                <div className='col-1 fz-2-7 ml-3 table-dark' title='How much saltwater coins do you have?'><ExplorerBalance></ExplorerBalance></div>
                <div className='col-1 fz-2-7 ml-3 bookstore'  title='Missions about books, papers,dye'><Bookstore></Bookstore></div>
                <div className='col-1 fz-2-7 ml-3 shopBoat' onClick={(e)=>this.displayModal(e,'shopBoat')}  title='Buy ship'><ShopBoat></ShopBoat></div>
                <div className='col-1 fz-2-7 ml-3 myProfileIcon' onClick={(e)=>this.displayModal(e,'myProfile')}><MyProfile></MyProfile></div>
                <div className='col-1 fz-2-7 ml-3 bg-sandybrown' onClick={(e)=>this.displayModal(e,'mapWorld')}><MapWithQuests></MapWithQuests></div>
                <div className='col-1 fz-2-7 ml-3 dove' onClick={(e)=>this.displayModal(e,'healthCenter')}><HealthCenter></HealthCenter></div>
                <div className='col-1  ml-3 bg-sandybrown' onClick={(e)=>this.displayModal(e,'mapWorld')}>Battles</div>
           </div>
        
        
        )	} 
 } 
 export default PlayerMenu;