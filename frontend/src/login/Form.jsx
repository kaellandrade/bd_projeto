import React from 'react';
import BtnIcon from '../components/BtnIcon';
/**
 * Formulário da tela de login;
 */
const Form = props => {
    return (
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

    )
}

export default Form;