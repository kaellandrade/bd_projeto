import React from 'react';
import Container from '../common/layout/Container';
import Grid from '../common/layout/Grid';
import Row from '../common/layout/Row';
import BtnIcon from '../components/BtnIcon';

const Login = props => {
    return (
        <Container>
            <Row>
                    <Grid cols='12 12 6 4' className='offset-md-3 offset-lg-4'>
                        <h2 className='mb-5 sub-title'>Login</h2>
                        <form action="">
                            <div className='mb-5'>
                                <input placeholder='E-mail' id='InputEmail' type="email" className='form-control' />
                            </div>
                            <div className='mb-5'>
                                <input placeholder='Senha' id='Inputpass' type="password" className='form-control' />
                            </div>
                            <div className='mb-5 form-check'>
                                <input id="exampleCheck1" className="form-check-input" type="checkbox" id="check" />
                                <label className="form-check-label" htmlFor="check">Lembrar</label>
                            </div>
                            <div className="d-grid gap-2">
                                <BtnIcon color='danger' icon='fas fa-sign-in-alt'>Entrar</BtnIcon>
                            </div>
                        </form>
                    </Grid>
            </Row>
        </Container>
    )
}

export default Login;

{/* <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div> */}