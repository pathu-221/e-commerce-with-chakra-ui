import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
}

export const user_reducer = (state = INITIAL_STATE, action) => {
    const { type, payload} = action;
    switch(type){
        case userActionTypes.GET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}