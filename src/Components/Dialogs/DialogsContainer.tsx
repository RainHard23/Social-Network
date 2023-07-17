import React from "react";
import {
    addMessageBody, DialogPageType, RootStateType,
    sendMessage
} from "../../redux/store";
import {AppStateType, DispatchType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: DispatchType): MapDispatchType => {
    return {
        sendMessage: () => {
            dispatch(sendMessage())
        },
        addMessageBody: (body: string) => {
            dispatch(addMessageBody(body))
        }
    }
}

type MapStateType = {
    dialogsPage: DialogPageType
}
type MapDispatchType = {
    addMessageBody: (body: string)=>void
    sendMessage: ()=> void
}

// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs)
//
// let AuthRedirectComponent = withAuthRedirect(Dialogs)


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

