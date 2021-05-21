import React from "react";
import BtnIcon from "../components/BtnIcon";
import { useState } from "react";
/**
 * Formulário da tela de login;
 */
const Form = (props) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === "checkbox";
    const data = formValues[name] || {};
    if (isCheckbox) {
        data[value] = checked
    }
    console.log(data);
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-5">
        <input
          name = "email"
          placeholder="E-mail"
          id="InputEmail"
          type="email"
          onChange={handleInputChange}
          value = {formValues.email || ""}
          className="form-control"
        />
      </div>
      <div className="mb-5">
        <input
          name = "senha"
          onChange={handleInputChange}
          value = {formValues.senha || ""}
          placeholder="Senha"
          id="Inputpass"
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-5 form-check">
        <input
          id="exampleCheck1"
          className="form-check-input"
          type="checkbox"
          name="lembrar"
          value="lembrarDados"
          onChange={handleInputChange}
          id="check"
        />
        <label className="form-check-label" htmlFor="check">
          Lembrar
        </label>
      </div>
      <div className="d-grid gap-2">
        <BtnIcon color="danger" icon="fas fa-sign-in-alt">
          Entrar
        </BtnIcon>
      </div>
    </form>
  );
};

export default Form;
