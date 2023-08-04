import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import {Dispatch} from "redux";
import {AppThunk} from "../../redux/redux-store";

type HeaderPropsType = {
    isAuth: boolean;
    login: string;
    logout: () => void
};

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://android-obzor.com/wp-content/uploads/2022/03/23-8.jpg" alt="#" />

            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                 :
                    <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
