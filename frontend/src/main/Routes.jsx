import React from 'react';

import {
    Switch,
    Route
} from "react-router-dom";

const Routes = props => (
    <Switch>
        <Route exact  path="/login">
            <h2>Tela de Login</h2>
        </Route>

        <Route exact path="/listaFimes">
            <h2>Listar Filmes</h2>
        </Route>

        <Route exact path="*">
            <h2>Página não encontrada</h2>
        </Route>

    </Switch>
);
export default Routes;