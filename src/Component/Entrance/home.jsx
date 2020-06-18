import React, {Component} from 'react';
import PatternsForModals from './modalsMain/patternForModals';
import HomeMenu from './homeMenu';
import ErrorModalUserNotLog from '../Errors/errorModalNotLog';


class Home extends Component { 
    constructor(props){
        super(props);
        this.state={
            displayModals:'displayNone',
            modal:'',
            showModalPattern:true
        }

        // !!!! This must be done with redux !!!!
        this.changeDisplay = this.changeDisplay.bind(this)
    }


    displayModal(event,modal){
       if(this.props.user.userProfile){
        this.setState({
            displayModals:'displayInitial',
            modal:modal
        })
        
       }
    }

    changeDisplay(){
        this.setState({
            displayModals:'displayNone'
        })
        
        
    }
    render(){
        
        
        return(
            <div>{this.props.loading ?

                <div>
                
                <div className=''>
                    <HomeMenu displayModal={(e,m)=>this.displayModal(e,m)}></HomeMenu>
                    <div className='col-10 offset-1 mt-1 mb-0'>
                        {this.state.showModalPattern
                            ?this.props.user.userProfile 
                                ? <PatternsForModals  {...this.props} display={this.state.displayModals} changeDisplay={this.changeDisplay} modal={this.state.modal}></PatternsForModals>
                                : <ErrorModalUserNotLog {...this.props}></ErrorModalUserNotLog>
                            : <div></div>
                    }
                    
                    </div>
                </div>
            </div>
            :<div>Loading</div>
            }
            
            </div>
            
        )	} 
 } 
 export default Home;