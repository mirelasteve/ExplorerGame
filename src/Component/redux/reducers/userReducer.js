export default function user(state={},action){
    
    switch(action.type){
        case 'LOAD_USER': return action.user ? action.user : state
        case 'SIGN_OUT': return {}
        case 'REGISTER_CAPTAIN_NAME': return {...state,userProfile:{...state.userProfile,userName:action.playerName}}
        case 'UPDATE_EXPERIENCE': return {...state,userProfile:{...state.userProfile,experience:state.userProfile.experience+parseInt(action.experience)}, }
        case 'UPDATE_USER': return {...state,userBenefits:action.parameter,}
        case 'UPDATE_SWC' : return {...state, userProfile:{...state.userProfile,swc:parseInt(state.userProfile.swc+action.swc)},}
        case 'UPDATE_LEVEL': return {...state, userProfile:{...state.userProfile,level:state.userProfile.level+1},}
        case 'UPDATE_LEVEL_MISSIONS': return {...state,levelMissions:action.missions}
        // case 'UPDATE_IS_DONE_MISSION': return{...state,levelMissions:{...state.levelMissions,missions:{...state.levelMissions.missions,[0]:{...state.levelMissions.missions[0],isDone:true}}}}
        case 'UPDATE_IS_DONE_MISSION':
                                return{...state,
                                    levelMissions:state.levelMissions.map((quest,questIndex)=>{
                                        if(questIndex===action.level-1){
                                            return{
                                                ...quest,
                                                missions:[...quest.missions.map(x=>{
                                                    
                                                if(x.type === action.typeForUpdate){

                                                    return {
                                                        ...x,
                                                        isDone:true
                                                    }
                                            
                                                    } else {
                                                     return x
                                                    }
                                            })]
                                        }

                                        } else {
                                            return quest
                                        }
                                    })
                                            
                                    
                                        }    


        default: return state
    }

}


// [action.level-1]:{
//     ...state.levelMissions[action.level-1],
//     missions:{...state.levelMissions[action.level-1].missions.map(x=>{
        

 
//  })

//     }
// }