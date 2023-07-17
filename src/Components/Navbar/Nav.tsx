import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";
const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink exact to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink exact to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a href="/news">News</a>
            </div>
            <div className={s.item}>
                <a href="/music">Music</a>
            </div>
            <div className={s.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>

)
}

export default NavBar;