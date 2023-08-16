import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/users.jpg";
import { InitialStateType } from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    usersPage: InitialStateType
    user: any
}

const Users = (props: UsersPropsType) => {

    return (
        <div className={s.user}>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt="#"
                             className={s.userPhoto} />
                    </NavLink>
                </div>
                <div className={s.userActions}>
                    {props.user.followed
                        ? <button className={s.unfollowButton} disabled={props.usersPage.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollow(props.user.id)
                                  }}>Unfollow</button>
                        : <button className={s.followButton} disabled={props.usersPage.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.follow(props.user.id)
                                  }}>Follow</button>}
                </div>
            </span>
            <span className={s.userInfo}>
                <span className={s.userName}>
                    <div>{props.user.fullName}</div>
                    <div>{props.user.status}</div>
                </span>
                <span className={s.userLocation}>
                    <div>{"el.location.country"}</div>
                    <div>{"el.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default Users;
