import React from 'react';
import './App.css';
import NavBar from './Components/Navbar/Nav';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

import UsersContainer from './Components/Users/UsersContainer';
import {compose} from 'redux';
import {AppStateType} from '../src/redux/redux-store';
import {initializeApp} from "../src/redux/app-reducer";
import Preloader from "../src/Components/common/Preloader/Preloader";
import ReactDOM from "react-dom";

const  DialogsContainer  = React.lazy(()=> import( './Components/Dialogs/DialogsContainer'));
const  ProfileContainer  = React.lazy(()=> import( './Components/Profile/ProfileContainer'));
// import ProfileContainer from './Components/Profile/ProfileContainer';

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
                    <Route path="/profile/:userId?" render={() =>
                    {return <React.Suspense fallback={<div>Loading...</div>}><ProfileContainer/> </React.Suspense>}}/>
                    <Route path="/dialogs" render={() =>
                    {return <React.Suspense fallback={<div>Loading...</div>}><DialogsContainer/> </React.Suspense>}}/>
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
