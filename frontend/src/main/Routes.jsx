import React from 'react';

import { Switch, Route } from "react-router-dom";
import Content from '../common/template/Content';
import Login from '../login/Login';
import Notfound from '../common/template/NotFound';
import Cadastro from '../cadastro-filmes/Cadastro';
import Sobre from '../sobre/Sobre';

const Routes = props => (
    <Switch>
        <Route exact path="/">
            <Content className='tela-login'>
                <Login/>
            </Content>
        </Route>

        <Route path="/cadastro">
            <Content className='tela-cadastro'>
                <Cadastro/>
            </Content>
        </Route>

        <Route path="/sobre" component={Sobre}>
            <Content className='tela-sobre'>
                <Sobre/>
            </Content>
        </Route>

        <Route path="*">
            <Content className='tela-404'>
                <Notfound/>
            </Content>
        </Route>

    </Switch>
);
export default Routes;