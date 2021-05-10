import React from 'react';

import '../css/estilo';

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../main/Routes';

const App = _ => (
    <div className="wrapper">
        <Router>
            <Routes />
        </Router>

    </div>
);

export default App;
