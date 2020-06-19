import countriesData from '../../data/countries/countries';
export default function countries (state = countriesData,action){

    switch (action.type) {
        case 'ADD_COUNTRY' : return [...state, action.countryInfo]
        case 'LOAD_COUNTRIES': return state = action.countries
        case 'EDIT_COUNTRY' : return   state = state
                .sort((a,b)=>a.countryName.localeCompare(b.countryName))
                .map(country => {
            
                    if (country.countryName === action.countryInfo.countryName) {
                        
                      return  action.countryInfo 
                    }
                return country
          })
        case 'REMOVE_COUNTRY': return state.filter(country => country.countryName !== action.countryName)
        default : return state
    }
}