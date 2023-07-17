import React from 'react';

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    InitialStateType,
    setCurrentPage,
    toggleIsFollowingProgress, unfollow,

} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]

}


type MapDispatchType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type UsersContainerPropsType = MapStatePropsType & MapDispatchType;

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setCurrentPage={this.props.setCurrentPage}
                />
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchType, {}, AppStateType>(
        mapStateToProps,
        {
            follow, unfollow,
            setCurrentPage, toggleIsFollowingProgress, getUsers
        }
    )
) (UsersContainer)
