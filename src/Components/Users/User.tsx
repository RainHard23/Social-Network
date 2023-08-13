import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/img/users.jpg";
import {InitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Pagination from "../../Components/common/Pagination/Pagination";


type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setCurrentPage: (pageNumber: number) => void
    //
    usersPage: InitialStateType
    user: any
}


const Users = (props: UsersPropsType) => {

    return (
        <div>
          <span>
            <div>
                <NavLink to={'/profile/' + props.user.id}>
              <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt="#"
                   className={s.userPhoto}/>
            </NavLink>
                </div>
            <div>
              {props.user.followed
                  ? <button disabled={props.usersPage.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.unfollow(props.user.id)
                            }}>Unfollow</button>

                  : <button disabled={props.usersPage.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.follow(props.user.id)
                            }}>Follow</button>}
            </div>
          </span>
            <span>
            <span>
              <div>{props.user.fullName}</div>
              <div>{props.user.status}</div>
            </span>
            <span>
              <div>{"el.location.country"}</div>
                <div>{"el.location.city"}</div>
            </span>
          </span>
        </div>
    )
}


export default Users;