import questionsData from '../../data/questions';
export default function questions(state=questionsData,action){
    
    switch(action.type){
        case 'LOAD_QUESTIONS': return state = questionsData[action.subtype]  // this will not be like this in DB
        default:return state
    }
}