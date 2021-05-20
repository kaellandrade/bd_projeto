import React from 'react';


import { Switch, Route } from "react-router-dom";
import Content from '../common/template/Content';
import Login from '../login/Login';
import Notfound from '../common/template/NotFound';

const Routes = props => (
    <Switch>
        <Route exact path="/">
            <Content className='tela-login'>
                <Login/>
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