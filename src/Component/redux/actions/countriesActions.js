import { database} from "../../../database/config";

export function addCountryToDatabase(countryObject){
    return (dispatch)=>{
        return database.ref('countries/'+countryObject.countryName)
            .update(countryObject)
            .then(()=>{
                dispatch(addCountry(countryObject))
            })
    }
}

export function startLoadCountries(){
    return (dispatch)=>{

        return database.ref('Africa/countries').once('value').then((snapshot)=>{
            let countries = [];
            snapshot.forEach((child)=>{
                countries.push(child.val())
            })
            dispatch(loadCountries(countries))
        })
  

        
    }
}

export function startEditCoutry(countryInfo) {
    
    return (dispatch) =>{
        return database.ref('Africa/countries/'+countryInfo.countryName).update(countryInfo)
          
        // .set(countryInfo)
        .then(()=>{
            dispatch(editCountry(countryInfo))
        })
    }
}





export function addCountry (countryObject) {
    
    return {
        type:'ADD_COUNTRY',
        countryInfo:countryObject
    }
}

export  function editCountry(countryInfo){
    
    return {
        type:'EDIT_COUNTRY',
        countryInfo:countryInfo
    }
}

export  function removeCountry(countryName){
    return {
        type:'REMOVE_COUNTRY',
        countryName:countryName
    }
}

export function loadCountries(countries){
    return {
        type:'LOAD_COUNTRIES',
        countries:countries
    }

}