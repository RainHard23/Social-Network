import React, {FC} from 'react';
import './App.css';
import NavBar from "./Components/Navbar/Nav";
import {Route} from "react-router-dom";

import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App: React.FC = () => {
    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <div className="main-block">
                <NavBar/>
                <Route path='/profile/:userId?' render={()=> <ProfileContainer />}/>
                <Route path={"/dialogs"} render={()=> <DialogsContainer />}/>
                <Route path={"/users"} render={()=>  <UsersContainer />}/>
                <Route path={"/login"} render={()=>  <Login />}/>

            </div>
        </div>

    );
}


export default App;
