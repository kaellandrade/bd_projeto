import React from 'react';
import Container from '../layout/Container';

/**
 * Componente cabeçalho
 */
const Header = _ => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Container container='container-fluid'>
                <a className="navbar-brand" href="#">LOGO AQUI</a>

                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                        <a className="btn btn-danger" aria-current="page" href="#">Sobre</a>
                    </li>
                </ul>
            </Container>
        </nav>

    </header>
);

export default Header;