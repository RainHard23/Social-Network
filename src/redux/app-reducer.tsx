import {AppThunk} from "../redux/redux-store";
import {getAuthUserData} from "../redux/auth-reducer";

export type InitialStateType = {
    initialized: boolean
}
export type authReducerProps = ReturnType<typeof initializedSuccsess>



let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state: InitialStateType = initialState, action: authReducerProps): InitialStateType => {

    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            console.log(action)
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initializedSuccsess = () => {
    return {
        type: "INITIALIZED_SUCCESS",
    } as const
}

export const initializeApp = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccsess());
};





export default appReducer