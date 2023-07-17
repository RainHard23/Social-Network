import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/img/users.jpg";
import {InitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type test = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void

    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number

    onPageChanged: (pageNumber: number) => void
}


const Users = (props: test) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (

        <div>

            <div>

                {slicedPages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}

            </div>

            {props.usersPage.users.map(el => (<div key={el.id}>
          <span>
            <div>
                <NavLink to={'/profile/' + el.id}>
              <img src={el.photos.small != null ? el.photos.small : userPhoto} alt="#" className={s.userPhoto}/>
            </NavLink>
                </div>
            <div>
              {el.followed
                  ? <button disabled={props.usersPage.followingInProgress.some( id => id === el.id)} onClick={() => {
                      props.unfollow(el.id)
                  }}>Unfollow</button>

                  : <button disabled={props.usersPage.followingInProgress.some( id => id === el.id)} onClick={() => {
                      props.follow(el.id)
                  }}>Follow</button>}
            </div>
          </span>
                    <span>
            <span>
              <div>{el.fullName}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{"el.location.country"}</div>
                <div>{"el.location.city"}</div>
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};

export default Users;