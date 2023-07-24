import React from "react";
import {
    addMessageBody, DialogPageType,

} from "../../redux/store";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {sendMessage} from "../../redux/dialogs-reducer";

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: DispatchType): MapDispatchType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessage(newMessageBody))
        }
    }
}

type MapStateType = {
    dialogsPage: DialogPageType
}
type MapDispatchType = {
    sendMessage: (newMessageBody: string)=> void
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

