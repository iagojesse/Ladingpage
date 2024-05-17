import React, { useState } from "react";
import "./style.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do Formulário:", formData);
  };

  return (
    <body className="contato">
      <form id="form" onSubmit={handleSubmit}>
        <div className="textfield">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="textfield">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="textfield">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn-efeito">
          Enviar
        </button>
      </form>
    </body>
  );
}

export default ContactForm;
