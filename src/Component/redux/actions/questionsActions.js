export function loadQuestions(subtype){
    return {
        type:'LOAD_QUESTIONS',
        subtype:subtype || 'geography'
    }
}