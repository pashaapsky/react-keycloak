import {useKeycloak} from '@react-keycloak/web';
import React from 'react';
import AuthFunction from '../utilities/AuthFunction';

const Menu = () => {
    const {keycloak, initialized} = useKeycloak();

    return (
        <ul>
            <li><a href="/">Home Page </a></li>
            {AuthFunction(['RealmAdmin']) && <li><a href="/protected">Protected Page</a></li>}

            {keycloak && !keycloak.authenticated &&
                <li><a className="btn-link" onClick={() => keycloak.login()}>Login</a></li>
            }

            {keycloak && keycloak.authenticated &&
                <li>
                    <a className="btn-link" onClick={() => keycloak.logout()}>Logout ({
                        keycloak.tokenParsed.preferred_username
                    })</a>
                </li>
            }
        </ul>
    )
};

export default Menu;