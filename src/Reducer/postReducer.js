import posts from '../Data/post'

const postReducer = function post(state = posts , action) {
    switch(action.type) {
        case "removePosts" :
            return [...state.slice(0,action.payLoad),...state.slice(action.payLoad + 1)]
        case "editPost": 
            let index = action.payLoad._id == 0 ? 0 : action.payLoad._id-1
            state[index] = action.payLoad
            return [...state]
        case "getPost" :
            return {
                ...state,
                post:state.filter(data=> data.id == action.payLoad)
            }
        default:
            return state;
    }
    
}

export default postReducer