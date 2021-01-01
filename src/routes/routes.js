import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../pages/Home';
import {PrivateRoute} from './PrivateRoute';
import ProtectedPage from '../pages/ProtectedPage';
import Profile from "../pages/Profile";
import RegisterRoute from "./RegisterRouter";

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <RegisterRoute exact path="/profile">
                    <Profile/>
                </RegisterRoute>

                <PrivateRoute roles={['RealmAdmin']} path="/protected" component={ProtectedPage}/>

                <Redirect to="/" />
            </Switch>
        </Router>
    );
};