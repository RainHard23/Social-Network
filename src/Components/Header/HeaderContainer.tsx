import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, InitialStateType, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

type MapStatePropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchType = {
    getAuthUserData: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchType

class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
            this.props.getAuthUserData()
    }

    render () {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login || ''
})

export default connect(mapStateToProps, {getAuthUserData}) (HeaderContainer);