import { ACTIONS } from './Actions'


const reducers = (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            };
        default:
            return state;
    }
}

export default reducers