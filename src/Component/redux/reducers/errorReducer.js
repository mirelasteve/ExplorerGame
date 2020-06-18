const initStateError={};

export function errors(state=initStateError,action){
    switch(action.type){
        
        case 'LOAD_ERROR_MESSAGE':action.error
        default: return state
    }
}