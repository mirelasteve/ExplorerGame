import React, {Component} from 'react';
import Country from './country';
import AddCountries from './addCountries';

class CountriesBox extends Component { 
    constructor(props){
        super(props);
        this.state={
            countries:this.props.countries
        }
    }
    render(){
       
        
        return(
            <div className='container'>
            <AddCountries {...this.props} addCountry={this.props.addCountryToDatabase}></AddCountries>

            {
                this.props.loading
                ?
                
                <div className='row'>
                
                {this.props.countries.sort((a,b)=>a.countryName.localeCompare(b.countryName))
                .map((country,keyCountry)=>
                 <Country key={keyCountry} missions={this.props.missions} country={country} editCountry={this.props.startEditCoutry} removeCountry={this.props.removeCountry}></Country>
                )}
                 </div>
                : <div className='alert-warning'>Loading</div>
            }
            

            </div>
        )	} 
 } 
 export default CountriesBox;