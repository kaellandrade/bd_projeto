import React from 'react';
import BtnIcon from '../components/BtnIcon';
/**
 * Formulário da tela de cadastro;
 */
const Form = props => {
    return (
        <form action="">
            <div className='mb-5'>
                <input placeholder='Hobbit' id='InputEmail' type="email" className='form-control' />
            </div>
            <div className='mb-5'>
                <input id='Inputpass' type="time" className='form-control' />
            </div>
            <div className="d-grid gap-2">
                <BtnIcon color='danger' icon='fas fa-sign-in-alt'>Cadastrar</BtnIcon>
            </div>
        </form>

    )
}

export default Form;