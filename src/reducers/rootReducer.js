const initState = {
    Questions:[
        
    ]
}

const rootReducer = (state = initState,action) => {
    if(action.type === "ADD_QUESTION"){
        return{
            ...state,
            Questions:[...state.Questions, action.Questions]
        }
    }else if(action.type ==="DELETE_QUESTION"){
        let newQuestions = state.Questions.filter(que => {
            return action.id !== que.id
        })
        return{
            ...state,
            Questions: newQuestions
        }
    }
    return state;
}

export default rootReducer;