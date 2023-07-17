import {DialogPageType} from "./store";
import {message} from "antd";

let initialState = {
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
    newMessageBody: ''
}



export type dialogsReducerProps = ReturnType<typeof addMessageBody> | ReturnType<typeof sendMessage>
const dialogsReducer = (state = initialState, action: dialogsReducerProps) => {

    switch (action.type) {
        case "UPDATE_NEW_MESSAGE_BODY":
            // state.newMessageBody = action.body;
            return {...state, newMessageBody: action.body}
        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            // state.messages.push({id: 6, message: body});
            return {...state, messages: [...state.messages,{id: 6, message: body}], newMessageBody : ''}
        default:
            return state
    }


}



export const addMessageBody = (body: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        body: body
    } as const
}

export const sendMessage = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}
export default dialogsReducer