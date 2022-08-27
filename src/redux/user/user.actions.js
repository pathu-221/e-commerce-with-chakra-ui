import { userActionTypes } from "./user.types"

export const getCurrentUser = payload => ({
    type: userActionTypes.GET_CURRENT_USER,
    payload: payload
})