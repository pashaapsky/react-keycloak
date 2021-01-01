import React, {Fragment} from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Header from "../containers/Header";
import '../scss/home.scss';


const Home = () => {
    const {keycloak, initialized} = useKeycloak();

    console.log("keycloak", keycloak);
    console.log("initialized", initialized);

    return (
        <Fragment>
            <Header />

            <section className="home">
                <div className="fixed-container">
                    <div className="home__content">

                    </div>
                </div>
            </section>

            {/*{initialized ?*/}
            {/*    keycloak.authenticated && <pre >{JSON.stringify(keycloak, undefined, 2)}</pre>*/}
            {/*    : <h2>keycloak initializing ....!!!!</h2>*/}
            {/*}*/}

        </Fragment>
    )
};

export default Home;