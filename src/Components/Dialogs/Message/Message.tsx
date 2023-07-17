import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type MessageProps = {
    message: string
}

export const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
