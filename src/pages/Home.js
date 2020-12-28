import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
// import AuthElement from '../components/AuthElement';

const Home = () => {
    const {keycloak, initialized} = useKeycloak();

    console.log("keycloak", keycloak);
    console.log("initialized", initialized);

    return (
        <div>
            <h1>Home Page</h1>

            <strong>Anyone can access this page</strong>

            {initialized ?
                keycloak.authenticated && <pre >{JSON.stringify(keycloak, undefined, 2)}</pre>
                : <h2>keycloak initializing ....!!!!</h2>
            }
        </div>
    )
};

export default Home;