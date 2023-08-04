import React, { FC } from 'react';
import './App.css';
import NavBar from './Components/Navbar/Nav';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from '../src/redux/auth-reducer';
import { compose } from 'redux';
import { AppStateType } from '../src/redux/redux-store';
import {initializeApp} from "../src/redux/app-reducer";
import Preloader from "../src/Components/common/Preloader/Preloader";

type MapDispatchPropsType = {
    initializeApp: () => void
};

type MapStateToPropsType = {
    initialized: boolean
}

type AppPropsType = MapDispatchPropsType & MapStateToPropsType;

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <div className="main-block">
                    <NavBar />
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchPropsType, null, AppStateType>(
        mapStateToProps,
        { initializeApp }
    ),
)(App);
