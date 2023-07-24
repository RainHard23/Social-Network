import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import { AppStateType } from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router-dom";
import {compose} from "redux";

// типизация параметров из URL
type PathParamsType = {
    userId: string
}

// типизация для получения данных из state
type MapStatePropsType = {
    profile?: any
    isAuth?: boolean
    status: string
}

// типизация для mapDispatchToProps
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

// типизация для свойств, которые приходят извне
type OwnPropsType = {}

// общий тип пропсов
type PropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType & OwnPropsType ;

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        );
    };
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        { getUserProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
) (ProfileContainer)
