import React from 'react';
import Profile, {ProfileTypeProps} from "./Profile";
import { connect } from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
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
    authorizedUserId: string | null
}

// типизация для mapDispatchToProps
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: string) => void
    saveProfile: (profile: ProfileTypeProps) => void
}

// типизация для свойств, которые приходят извне
type OwnPropsType = {}

// общий тип пропсов
type PropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType & OwnPropsType ;

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId && this.props.authorizedUserId!=null) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != this.props.match.params.userId ) {
            this.refreshProfile()
        }

    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                />
            </div>
        );
    };
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
        mapStateToProps,
        { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
) (ProfileContainer)
