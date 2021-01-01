import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useKeycloak} from "@react-keycloak/web";

const RegisterRoute = ({path, children, ...rest}) => {
    const {keycloak, initialized} = useKeycloak();

    return initialized && keycloak.authenticated ? (
        <Route path={`${path}`} {...rest}>
            {children}
        </Route>
    ) : (
        <Redirect to="/" />
    )
};

export default RegisterRoute;
