import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
})



let store = createStore(reducers, applyMiddleware(thunk))

// export type AppStoreType = typeof store.getState
// export type AppStateType = typeof store.getState
export type DispatchType = typeof store.dispatch
export type AppStateType = ReturnType<typeof reducers>
console.log(store.getState().auth)

export type AppStoreType = typeof store

console.log (store)


export default store