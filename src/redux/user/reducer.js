import { user_action_types } from "../actions_types";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case user_action_types.SET_CURRENT_USER:
            return { ...state, currentUser: action.payload }
        default:
            return state;
    }
}

export default userReducer;