import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

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
        default:
            return state
    }


}

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

// export const changeNewTextAC = (newPostText: string) => {
//     return {
//         type: "UPDATE-NEW-POST-TEXT",
//         newText: newPostText
//     } as const
// }
export const setUserStatus = (status: string) => {
    return {
        type: "SET__STATUS",
        status
    } as const
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(responce => {
            dispatch(setUserStatus(responce.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }

        })
}

export default profileReducer