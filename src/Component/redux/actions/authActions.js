import { database, auth } from "../../../database/config";
import userData from '../../data/user';

export function loadSignUp(provider,playerName){
    provider = provider === 'facebook' 
    ? new auth.auth.FacebookAuthProvider()
    : new auth.auth.GoogleAuthProvider();
   

       return async (dispatch)=>
       await auth.auth().signInWithPopup(provider).then( function(result) {
     
        const user = result.user;
        database.ref('users/players')
                        .once('value')
                        .then( (snapshot)=>{
                     
                            if(snapshot.child(user.uid).exists()){
                                dispatch(loadAuthUser(user))
                            } else {
                              database.ref('users/players/'+user.uid).set({
                                userInfo:user.toJSON(),
                                playerInfo:userData
                            }).then(()=>{
                                dispatch(loadAuthUser(userData))})
                            } 
                        })


      }).catch(function(error) {
         const errorObj={
         errorCode:error.code,
         errorMessage:error.message, 
         email:error.email,
         credential:error.credential
        }
        dispatch(loadErrorMessage(errorObj))
      })
        
}

export  function loadAuthUser(){
    return async (dispatch)=>{
    await  auth.auth().onAuthStateChanged((user)=> {
            if (user) {
            try{
                database.ref('users/players/').child(user.uid).once('value').then((snapshot)=>{
                    if(snapshot.val()){
                       dispatch(loadUser(snapshot.val().playerInfo))
                       dispatch(loadAuthUserProfile(snapshot.val().userInfo)) 
                    } else {
                       
                    }
                    
                })
            } catch(error) {
                dispatch(loadErrorMessage(error))

            }
            
            } else {
            
            }
          })
            
        
    }
}

export function loadUser(user){

    return {
        type:'LOAD_USER',
        user
    }
}

export function loadAuthUserProfile(user){
   
    return {
        type:'AUTH_USER',
        user
    }
}

export function loadSignOut(){

    return async (dispatch) =>{
       await auth.auth().signOut().then(function() {
            
        dispatch(signOut())

          }).catch(function(error) {
            
          });
    }

    
}
export function signOut(){
   return {
       type:'SIGN_OUT'

   }
      
}
export function loadErrorMessage(error){
    return {
        type:'LOAD_ERROR_MESSAGE',
        error
    }
}

export function signUpWithGoogle(user){
    return {
        type:'GOOGLE_SIGN_UP',
        user
    }
}

export function signUpWithFacebook(user){
    return {
        type:'FACEBOOK_SIGN_UP',
        user
    }
}

export function authUser(user){
    return {
        type:'AUTH_USER',
        user

    }

}