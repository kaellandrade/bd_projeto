import React from "react";
import BtnIcon from "../components/BtnIcon";
import { useState } from "react";
/**
 * Formulário da tela de cadastro;
 */
const Form = (props) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === "checkbox";
    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
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
          name="nome"
          placeholder="Hobbit"
          id="InputNome"
          type="text"
          value={formValues.nome || ""}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-5">
        <input
          name="genero"
          placeholder="Gênero"
          id="InputGenero"
          type="text"
          value={formValues.genero || ""}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-5">
        <input
          name="ano"
          placeholder="Ano de Lançamento"
          id="InputAno"
          type="date"
          value={formValues.ano || ""}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-5">
        <input
          name="direcao"
          placeholder="Direção"
          id="InputDirecao"
          type="text"
          value={formValues.direcao || ""}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-5">
        <input
          id="Inputpass"
          name="tempo"
          type="time"
          className="form-control"
          value={formValues.tempo || ""}
          onChange={handleInputChange}
        />
      </div>
      <div className="d-grid gap-2">
        <BtnIcon color="danger" icon="fas fa-sign-in-alt">
          Cadastrar
        </BtnIcon>
      </div>
    </form>
  );
};

export default Form;
