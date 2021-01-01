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
                <div className="menu">
                    <div className="menu-left">
                        <NavLink exact className="nav-link" to="/">Home</NavLink>

                        {AuthFunction(['uma_authorization']) && (
                            <NavLink className="nav-link" to="/profile">
                                {keycloak.tokenParsed.preferred_username}
                            </NavLink>
                        )}
                    </div>

                    {AuthFunction(['RealmAdmin']) && <NavLink to="/protected">Protected Page</NavLink>}

                    {keycloak && !keycloak.authenticated && (
                        <button
                            className="nav-btn"
                            style={{marginLeft: "auto"}}
                            onClick={() => keycloak.login({
                                redirectUri: `http://localhost:3000/profile`
                            })}>
                            Login
                        </button>
                    )}

                    {keycloak && !keycloak.authenticated && (
                        <button
                            className="nav-btn"
                            onClick={() => keycloak.register()}>
                            Register
                        </button>
                    )}

                    {keycloak && keycloak.authenticated && (
                        <button
                            className="nav-btn"
                            onClick={() => keycloak.logout({
                                redirectUri: `http://localhost:3000/`
                            })}>
                            Logout ({keycloak.tokenParsed.preferred_username})
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
};

export default NavBar;