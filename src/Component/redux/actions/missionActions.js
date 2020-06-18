import { database } from "../../../database/config";

export function startAddMissions(newMission){
    return (dispatch)=>{
        dispatch(addMission(newMission))
        return database.ref('missions/').once('value').then((snapshot)=>{
        let missionsData = snapshot.val();
        missionsData.push(newMission)
        database.ref('missions/').set(missionsData)
            dispatch(loadMissions(missionsData))
})
    
    }
}
export function startLoadMissions(){
 
    return async (dispatch)=>{
        await database.ref('missions').once('value').then((snapshot)=>{
            
            dispatch(loadMissions(snapshot.val()))
        })
    }
}
export function loadMissions(missions){
   
    return {
        type:'LOAD_MISSIONS',
        missions:missions
    }
}

export function addMission(mission){
    return {
        type:'ADD_MISSION',
        mission
    }
}
