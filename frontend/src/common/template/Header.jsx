import React from 'react';
import Container from '../layout/Container';
import Logo from '../../assets/logo.svg'

/**
 * Componente cabeçalho
 */
const Header = _ => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Container container='container'>
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt=""/>
                </a>

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