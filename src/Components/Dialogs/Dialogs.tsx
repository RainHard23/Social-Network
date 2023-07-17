import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {
    DialogPageType,
} from "../../redux/store";
import {AppStoreType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type ProfilePagePropsType ={
    dialogsPage: DialogPageType
    // dispatch: (action: DispatchPropsType) => void
    addMessageBody: (body: string)=>void
    sendMessage: ()=> void
    isAuth: boolean
}

export const Dialogs = (props: ProfilePagePropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody;
    let onMessageClick = ()=> {

    props.sendMessage()
    }

    let onNewMessageChange=(e: ChangeEvent<HTMLTextAreaElement>)=> {

      let body = e.currentTarget.value
        props.addMessageBody(body)
    }

    if (!props.isAuth)  return <Redirect to={'login'} />


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='message Enter pjlsta'></textarea></div>
                    <div>
                        <button onClick={onMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}