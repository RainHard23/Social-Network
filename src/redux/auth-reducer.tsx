import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {AppThunk} from "../redux/redux-store";
import {stopSubmit} from "redux-form";

export type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    captchaUrl: null | string
}
export type authReducerProps = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>


let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: InitialStateType = initialState, action: authReducerProps): InitialStateType => {

    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload,
            }
        case "GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state,
                captchaUrl: action.payload
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: "GET_CAPTCHA_URL_SUCCESS",
        payload: captchaUrl
    } as const
}


export const getAuthUserData = (): AppThunk => async (dispatch) => {
    let responce = await authAPI.me()
    if (responce.data.resultCode === 0) {
        let {id, login, email} = responce.data.data
        dispatch(setAuthUserData(id, login, email, true))

    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch) => {


    let responce = await authAPI.login(email, password, rememberMe, captcha)

    if (responce.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (responce.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logout = (): AppThunk => async (dispatch) => {
    let responce = await authAPI.logout()
    if (responce.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch) => {
    const responce = await securityAPI.getCaptchaUrl()
    const captchaUrl = responce.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl))
}


export default authReducer