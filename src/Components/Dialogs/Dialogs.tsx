import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    DialogPageType,
} from "../../redux/store";
import AddMessageForm, {AddMessageType} from "../../Components/Dialogs/AddMessageForm/AddMessageForm";



type ProfilePagePropsType = {
    dialogsPage: DialogPageType
    addMessageBody: (body: string) => void
    sendMessage: (values: string) => void
    isAuth: boolean
}

export const Dialogs = (props: ProfilePagePropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)


    const addNewMessage = (values: AddMessageType) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

