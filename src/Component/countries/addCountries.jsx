import React, {Component} from 'react';

class AddCountries extends Component { 
    constructor(props){
        super(props);
        this.state={
            countryName:'',
            capital:'',
            currency:'',
            flag:'',
            population:'',
            religion:'',
            taxes:'',
            duration:'',
            coordinates:'',
            updateState:false
        }
    }

    handleCountryName(event){
        
        this.setState({
            countryName:event.target.value
        })   
    }

    handleCapital(event){
        
        this.setState({
            capital:event.target.value
        })   
    } 

    handleCurrency(event){
        
        this.setState({
            currency:event.target.value
        })   
    }

    handleReligion(event){
        
        this.setState({
            religion:event.target.value
        })   
    }

    handleFlag(event){
        
        this.setState({
            flag:event.target.value
        })   
    }

    handlePopulation(event){
        
        this.setState({
            population:event.target.value
        })   
    }
    handleTaxes(event){
        
        this.setState({
            taxes:event.target.value
        })   
    }
    handleDuration(event){
        
        this.setState({
            duration:event.target.value
        })   
    }
    handleCoordinates(event){
        
        this.setState({
            coordinates:event.target.value
        })   
    }

    addCountry(){
        
        // this.props.history.push('/')
        this.props.addCountry({
            countryName:this.state.countryName,
            capital:this.state.capital,
            currency:this.state.currency,
            flag:this.state.flag,
            population:this.state.population,
            religion:this.state.religion,
            taxes:this.state.taxes,
            duration:this.state.duration,
            coordinates:this.state.coordinates,
            
        });

        this.setState({
            updateState:true
        });
       
     
    }
  
    componentDidUpdate(){
        

        if(this.state.updateState){
            this.setState({
                countryName:'',
                capital:'',
                currency:'',
                flag:'',
                population:'',
                religion:'',
                taxes:'',
                duration:'',
                coordinates:'',
                updateState:false
            })
            
            return true
        }
        return false
    }
    render(){

 
        
        
        return(
        <div>
               

            <div className="form-group row ">
                 <label className="col-form-label">Enter data</label>
                <input type="text" className="form-control rem10 col-1" value={this.state.countryName} placeholder="Country Name"  onChange={(e)=>this.handleCountryName(e)}/>
                <input type="text" className="form-control rem10 col-1" value={this.state.capital} placeholder="capital"  onChange={(e)=>this.handleCapital(e)}/>
                <input type="text" className="form-control rem10 col-1" value={this.state.currency} placeholder="currency"  onChange={(e)=>this.handleCurrency(e)}/>
                <input type="text" className="form-control rem10 col-1" value={this.state.flag} placeholder="flag"  onChange={(e)=>this.handleFlag(e)}/>
                <input type="text" className="form-control rem10 col-1" value={this.state.religion} placeholder="religion"  onChange={(e)=>this.handleReligion(e)}/>
                <input type="text" className="form-control rem10 col-1" value={this.state.population} placeholder="population"  onChange={(e)=>this.handlePopulation(e)}/>
                <input type="text" className="form-control rem10 col-1" value={this.state.taxes} placeholder="taxes"  onChange={(e)=>this.handleTaxes(e)}/>
                <input type="text" className="form-control rem10 col-1" value={this.state.duration} placeholder="duration"  onChange={(e)=>this.handleDuration(e)}/>
                {/* <input type="text" className="form-control rem10 col-1" value={this.state.population} placeholder="population"  onChange={(e)=>this.handlePopulation(e)}/> */}
                <input type="text" className="form-control rem10 col-1" value={this.state.coordinates} placeholder=" x | y | path1 | path2 "  onChange={(e)=>this.handleCoordinates(e)}/>
                {/* <input type="text" className="form-control rem10 col-1" value={this.state.population} placeholder="population"  onChange={(e)=>this.handlePopulation(e)}/> */}




                {/* <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li> */}
  
            </div>

            <button type="button" className="btn btn-success" onClick={(e)=>this.addCountry(e)}>Add</button>
            
            
        </div>)	} 
 } 

 
 export default AddCountries;