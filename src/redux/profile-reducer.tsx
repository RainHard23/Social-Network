import {Action, Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {ProfileTypeProps} from "../Components/Profile/Profile";
import {AppStateType, AppThunk} from "../redux/redux-store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type InitialProfilePage = {
    newPostText: string
    posts: PostType[]
    profile: any
    status: string
}

let initialState: InitialProfilePage = {
    posts: [
        {id: 1, message: "hi", likesCount: 12},
        {id: 2, message: "hello", likesCount: 20},
    ],
    newPostText: '',
    profile: null,
    status: ''
}


export type profileReducerProps = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof savePhotoSuccess>



const profileReducer = (state = initialState, action: profileReducerProps) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET__STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SAVE__PHOTO__SUCCESS": {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }


}

export const setUserProfile = (profile: string) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: "SET__STATUS",
        status
    } as const
}

export const savePhotoSuccess = (photos: string) => {
    return {
        type: "SAVE__PHOTO__SUCCESS",
        photos
    } as const
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let responce = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(responce.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let responce = await profileAPI.updateStatus(status)
            if (responce.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
}

export const savePhoto = (file: string) => async (dispatch: Dispatch) => {
    let responce = await profileAPI.savePhoto(file)
    if (responce.data.resultCode === 0) {
        dispatch(savePhotoSuccess(responce.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileTypeProps): AppThunk => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;

            const response = await profileAPI.saveProfile(profile);

            if (response.data.resultCode === 0) {
                if (userId) {
                    dispatch(getUserProfile(userId.toString())); // Преобразуйте userId в строку
                }else {
                    debugger
                    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
                    return Promise.reject(response.data.messages[0])
                }
            }
    };
};


export default profileReducer