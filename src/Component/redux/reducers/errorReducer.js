const initStateError={};

export function errors(state=initStateError,action){
    switch(action.type){
        
        case 'LOAD_ERROR_MESSAGE': return {...state,...action.error}
        default: return state
    }
}