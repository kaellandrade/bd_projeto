import Container from "../layout/Container";
import React from 'react';
import Content from "./Content";
import Grid from "../layout/Grid";
import Row from "../layout/Row";
import Error404 from '../../assets/error.svg'


const Notfound = props => (
    <Container>
        <Row>
            <Grid cols='12 6' className='align-self-center'>
                <h2 className='display-4'>Está página não existe</h2>
            </Grid>

            <Grid cols='12 6' >
                <img width={500} className='img-fluid d-flex' src={Error404} alt="" />
            </Grid>
        </Row>
    </Container >

);
export default Notfound;