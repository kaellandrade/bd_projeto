import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/estilo';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../main/Routes';
import Header from '../common/template/Header';
import Content from '../common/template/Content';

const App = _ => (
        <Router>
            <Header/>
            <Routes />
        </Router>
);

export default App;
