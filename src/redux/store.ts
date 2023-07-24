import dialogsReducer, {dialogsReducerProps} from "./dialogs-reducer";
import profileReducer, {profileReducerProps} from "./profile-reducer";


export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

 type ProfilePageType = {
    newPostText: string
    posts: PostType[]
}
export type UsersLocationType = {
    city: string
    country: string
}




export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StorePropsType = {
    _state: RootStateType
    _callSubscriber: ()=> void
    addPostCallBack: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (callback: ()=> void) => void
    getState: ()=> RootStateType
    dispatch: (action: DispatchPropsType) => void
}

// export const addPostAC = () => {
//     return {
//         type: "ADD-POST",
//
//     } as const
// }

export const changeNewTextAC = (newPostText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newPostText
    } as const
}

export const addMessageBody = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
}

// export const sendMessage = () => {
//     return {
//         type: 'SEND_MESSAGE'
//     } as const
// }



export type DispatchPropsType =   ReturnType<typeof changeNewTextAC> | ReturnType<typeof addMessageBody>
    // | ReturnType<typeof sendMessage





const store:StorePropsType = {
    _state: {
    profilePage: {
        newPostText: '',
        posts: [
            {id: 1, message: "hi", likesCount: 12},
            {id: 2, message: "hello", likesCount: 20},
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Pudge" },
            { id: 2, name: "Legion" },
            { id: 3, name: "Courier" },
            { id: 4, name: "Slark" },
            { id: 5, name: "Mort" },
            { id: 6, name: "Oracle" }
        ],
        messages: [
            { id: 1, message: "hi" },
            { id: 2, message: "Hou is your it-kamasutra" },
            { id: 3, message: "yo" },
            { id: 4, message: "Slark" },
            { id: 5, message: "Mort" },
            { id: 6, message: "Oracle" }
        ],
    },

},
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state change')
    },
    addPostCallBack(){
        let newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText (newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    subscribe (callback)  {
        this._callSubscriber = callback;
    },
    dispatch(action) {

        // this._state.profilePage = profileReducer(this._state.profilePage, action as profileReducerProps)
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as dialogsReducerProps)
        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._callSubscriber()

        // if (action.type === 'ADD-POST') {
        //     let newPost: PostType = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber()
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber()
        // } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
        //     console.log(action.body)
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber()
        // } else if (action.type === 'SEND_MESSAGE') {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.messages.push({ id: 6, message: body });
        //     this._callSubscriber()
        // }
}

}
export default store;