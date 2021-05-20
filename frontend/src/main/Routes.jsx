import React from 'react';
import Container from '../common/layout/Container';
import Row from '../common/layout/Row';
import Grid from '../common/layout/Grid';


import { Switch, Route } from "react-router-dom";
import Content from '../common/template/Content';
import Login from '../login/Login';
import Notfound from '../common/template/NotFound';

const Routes = props => (
    <Switch>
        <Route exact path="/">
            <Content className='tela-login'>
                <Login/> {/* Tela de login*/}
            </Content>
        </Route>

        <Route exact path="/listaFimes">
            <Content>
                <h2>Listar Filmes</h2>
            </Content>
        </Route>

        <Route exact path="*">
            <Content className='tela-404'>
                <Notfound/>
            </Content>
        </Route>

    </Switch>
);
export default Routes;