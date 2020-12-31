import {useKeycloak} from '@react-keycloak/web';
import React from 'react';
import {NavLink} from "react-router-dom";
import AuthFunction from '../utilities/AuthFunction';
import '../scss/nav.scss'

const NavBar = () => {
    const {keycloak, initialized} = useKeycloak();

    return (
        <nav className="nav">
            <div className="fixed-container">
                <NavLink className="link" to="/">Home Page </NavLink>

                {AuthFunction(['RealmAdmin']) && <NavLink href="/protected">Protected Page</NavLink>}

                {keycloak && !keycloak.authenticated &&
                <button onClick={() => keycloak.login()}>Login</button>}

                {keycloak && keycloak.authenticated &&
                <button onClick={() => keycloak.logout()}>Logout ({
                    keycloak.tokenParsed.preferred_username
                })</button>
                }
            </div>
        </nav>
    )
};

export default NavBar;