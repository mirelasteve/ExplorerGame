
  export default function auth(state={},action){
    switch(action.type){
        case 'GOOGLE_SIGN_UP': return action.user
        case 'FACEBOOK_SIGN_UP': return action.user
        case 'SIGN_UP': return action.user
        case 'AUTH_USER': return action.user
        default: return state
    }
}