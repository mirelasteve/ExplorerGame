import { database } from "../../../database/config";



export function updateUser(parameter){
   return {
        type:'UPDATE_USER',
        parameter
   } 
}

export function updateLevel(){
   return {
        type:'UPDATE_LEVEL',
        
   } 
}

export function updateExperience(experience){
    return {
        type:'UPDATE_EXPERIENCE',
        experience
    }
}
export function updateSwc(swc){
    return {
        type:'UPDATE_SWC',
        swc
    }
}
export function updateLevelMissions(missions){
    return {
        type:'UPDATE_LEVEL_MISSIONS',
        missions
    }
}
export function updateIsDoneMission(typeForUpdate,level){
    return {
        type:'UPDATE_IS_DONE_MISSION',
        typeForUpdate,
        level
    }
}

export function loadRegisterCaptainName(userUid,playerInfo,playerName){
    const updates = {};
    updates['/playerInfo/userProfile/userName']=playerName;
    
    return (dispatch)=> {database.ref('users/players/'+userUid)
    .update(
        updates
    ).then(()=>{
        dispatch(registerCaptainName(playerName))})
        }
}

export function registerCaptainName(playerName){
    return {
        type:'REGISTER_CAPTAIN_NAME',
        playerName
    }
}