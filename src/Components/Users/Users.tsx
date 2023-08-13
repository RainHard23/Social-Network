import React from 'react';
import {InitialStateType} from "../../redux/users-reducer";
import Pagination from "../../Components/common/Pagination/Pagination";
import User from "./User"


type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void

    usersPage: InitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number

    onPageChanged: (pageNumber: number) => void
}


const Users = (props: UsersPropsType) => {
    return (

        <div>

            <Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                        totalUserCount={props.totalUserCount} pageSize={props.pageSize}/>

            {props.usersPage.users.map(el => <User
                    usersPage={props.usersPage}
                    user={el}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    key={el.id}
                />
            )
            }
        </div>
    )
}

export default Users;