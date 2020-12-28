import React from 'react';
import ReactDOM from 'react-dom';
import {ReactKeycloakProvider} from '@react-keycloak/web';
import App from './App';
import * as serviceWorker from './serviceWorker';
import keycloak from "./keycloak";

ReactDOM.render(
    <ReactKeycloakProvider authClient={keycloak}>
        <App/>
    </ReactKeycloakProvider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
