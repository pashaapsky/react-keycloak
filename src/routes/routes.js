import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Menu from '../pages/Menu';
import Home from '../pages/Home';
import { PrivateRoute } from '../utilities/PrivateRoute';
import ProtectedPage from '../pages/ProtectedPage';

export const AppRouter = () => {
    const {keycloak, initialized} = useKeycloak();

    if (!initialized) {
        return <h3>Loading ... !!!</h3>;
    }

    return (<>
            <Menu />

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <PrivateRoute roles={['RealmAdmin']} path="/protected" component={ProtectedPage} />
                </Switch>
            </Router>
        </>
    );
};