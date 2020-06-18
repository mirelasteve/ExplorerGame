import React, {Component} from 'react';

class SignIn extends Component { 
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                  <div className="container">
            
            
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">f</button>
          
            
            <div className="modal" id="myModal">
              <div className="modal-dialog">
                <div className="modal-content">
                
                 
                  <div className="modal-header">
                    <h4 className="modal-title">Facebook</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  
                 
                  <div className="modal-body">
                    
                  </div>
                  
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>
            </div>
        )	} 
 } 
 export default SignIn;