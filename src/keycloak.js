import Keycloak from "keycloak-js";

const keyCloakConfig = {
    url: 'http://localhost:8080/auth',
    realm: 'apsky-demo',
    clientId: 'react-app'
};

const keycloak = new Keycloak(keyCloakConfig);

export default keycloak;