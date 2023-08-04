import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppThunk} from "../redux/redux-store";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    userId: null | string
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
            console.log(action)
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = ():AppThunk => (dispatch) => {
    return authAPI.me()
        .then(responce => {
            console.log(responce)
            if (responce.data.resultCode === 0) {
                let {id, login, email} = responce.data.data
                dispatch(setAuthUserData(id, login, email, true))

            }
        })
}

export const login = (email: string,password: string, rememberMe: boolean):AppThunk => (dispatch) => {




    authAPI.login(email, password, rememberMe)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error";
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = ():AppThunk => (dispatch) => {
    authAPI.logout()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}



export default authReducer