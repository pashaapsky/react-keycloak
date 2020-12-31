import React from 'react';
import {AppRouter} from "./routes/routes";
import Error from "./components/Error";

function App() {
    return (
        <div className="App">
            <Error />

            <AppRouter />
        </div>
    );
}

export default App;
