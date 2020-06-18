export default function missions(state=[],action){
    switch(action.type){
        case 'ADD_MISSION': return [...state,action.mission]
        case 'LOAD_MISSIONS': return action.missions// this will not be like this in DB
        default: return state
    }

}