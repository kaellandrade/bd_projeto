import React from 'react';
import Container from '../common/layout/Container';
import Grid from '../common/layout/Grid';
import Row from '../common/layout/Row';
import Form from './FormCadastro';
import TabelaFilmes from './TabelaFilmes';
const Cadastro = props => {
    return (
        <div>
            <div className='banner'>
               <h1 className='title-banner'>Cadastrar filmes</h1>
            </div>
        <Container container='container pb-5 pt-5'>
            <Row>
                <Grid cols='12 12 6' className='mt-5 mb-5'>
                    <Form />
                </Grid>

                <Grid cols='12 12 6' className='mt-5 mb-5'>
                    <TabelaFilmes />
                </Grid>
            </Row>
        </Container>
        </div>
    )
}

export default Cadastro;