
  export default function auth(state={},action){
    switch(action.type){
        case 'GOOGLE_SIGN_UP': return {...state,...action.user}
        case 'FACEBOOK_SIGN_UP': return {...state,...action.user}
        case 'SIGN_UP': return {...state,...action.user}
        case 'AUTH_USER': return {...state,...action.user}
        default: return state
    }
}