import React, {Fragment} from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Posts from "../containers/Posts";
import Header from "../containers/Header";
import AsyncPosts from "../containers/AsyncPosts";
// import AuthElement from '../components/AuthElement';
import "../scss/post.scss"

const Home = () => {
    const {keycloak, initialized} = useKeycloak();

    console.log("keycloak", keycloak);
    console.log("initialized", initialized);

    return (
        <Fragment>
            <Header />

            {initialized ?
                keycloak.authenticated && <pre >{JSON.stringify(keycloak, undefined, 2)}</pre>
                : <h2>keycloak initializing ....!!!!</h2>
            }

            <div className="fixed-container">
                <Posts />
                <AsyncPosts />
            </div>
        </Fragment>
    )
};

export default Home;