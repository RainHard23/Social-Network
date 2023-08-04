import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStatePropsType = {
    isAuth: boolean
    login: string

}

type MapDispatchType = {

    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchType

class HeaderContainer extends React.Component <HeaderContainerPropsType> {

    render () {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login || ''
})

export default connect(mapStateToProps, {logout}) (HeaderContainer);