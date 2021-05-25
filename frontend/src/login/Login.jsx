import React from 'react';
import Container from '../common/layout/Container';
import Grid from '../common/layout/Grid';
import Row from '../common/layout/Row';
import Form from './Form';

const Login = props => {
    return (
        <Container>
            <Row>
                <Grid cols='12 12 6 4' className='offset-md-3 offset-lg-4'>
                    <h2 className='mb-5 sub-title'>Login</h2>
                    <Form />
                </Grid>
            </Row>
        </Container>
    )
}

export default Login;