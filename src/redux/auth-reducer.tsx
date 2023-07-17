import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}
export type authReducerProps = ReturnType<typeof setAuthUserData>



let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: authReducerProps): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: "SET_USER_DATA",
        data: {userId, email, login}
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                let {userId, login, email} = responce.data.data
                dispatch(setAuthUserData(userId, login, email))
            }
        })
}



export default authReducer