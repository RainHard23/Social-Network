import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppThunk} from "../redux/redux-store";

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
                ...action.payload,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        payload: {userId, email, login, isAuth}
    } as const
}

export const getAuthUserData = ():AppThunk => (dispatch) => {
    authAPI.me()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                let {userId, login, email} = responce.data.data
                dispatch(setAuthUserData(userId, login, email, true))

            }
        })
}

export const login = (email: string,password: string, rememberMe: boolean):AppThunk => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}



export default authReducer