import {UsersLocationType} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

 export type UserType = {
    photos: {small: string, large: string}
    id: number
    followed: boolean
    fullName: string
    status: string
    location: UsersLocationType
}

export type InitialStateType = {
     users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type usersReducerProps =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>



let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

 const usersReducer = (state:InitialStateType = initialState, action:usersReducerProps):InitialStateType => {

     switch (action.type) {
         case "FOLLOW":
         return {
             ...state,
             users: state.users.map(el=>{
                 if (el.id === action.userId) {
                     return {...el, followed: true};
                 }
                 return el;
         })
         }

         case "UNFOLLOW":
             return {
                 ...state,
                 users: state.users.map(el=>{
                     if (el.id === action.userId) {
                         return {...el, followed: false};
                     }
                     return el;
                 })
             }
         case "SET-USERS": {
             return {...state, users: action.users}
         }
         case 'SET-CURRENT-PAGE': {
             return {
                 ...state, currentPage: action.currentPage
             }
         }
         case 'SET-TOTAL-USERS-COUNT': {
             return {
                 ...state, totalUsersCount: action.count
             }
         }
         case 'TOGGLE-IS-FETCHING': {
             return { ...state, isFetching: action.isFetching}
         }

         case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
             return { ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
             }
         }

         default:
             return state
     }
}

export const followSuccess = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollowSuccess = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count: totalUsersCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
     return {
         type: "TOGGLE-IS-FETCHING",
         isFetching
     } as const
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
   return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage,pageSize)
            .then(data => {
                dispatch(setCurrentPage(currentPage));
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}


export default usersReducer