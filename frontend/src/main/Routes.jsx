import React from 'react';


import { Switch, Route } from "react-router-dom";
import Content from '../common/template/Content';
import Login from '../login/Login';
import Notfound from '../common/template/NotFound';
import Cadastro from '../cadastro-filmes/Cadastro';

const Routes = props => (
    <Switch>
        <Route exact path="/">
            <Content className='tela-login'>
                <Login/>
            </Content>
        </Route>

        <Route exact path="/cadastro">
            <Content className='tela-cadastro'>
                <Cadastro/>
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