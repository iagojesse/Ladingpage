import React from "react";
import "./reset.css";
import "./style.css";

function ContatoProfissional() {
  return (
    <div className="contato">
      <div id="form">
        <div className="card">
          <div className="textfield">
            <label htmlFor="nome"></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              required
            />
          </div>
          <div className="textfield">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="textfield">
            <label htmlFor="numero"></label>
            <input
              type="tel"
              id="numero"
              name="numero"
              placeholder="Numero em formato internacional"
              required
            />
          </div>
          <div className="textfield">
            <label htmlFor="mensagem"></label>
            <textarea id="mensagem" name="mensagem"></textarea>
          </div>
          <button className="btn">Enviar</button>
          <div className="button-container">
            <button id="btnContato">Contato</button>
            <button id="btnPortfolio">Portfólio</button>
            <button id="btnCurriculo">Curriculo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContatoProfissional;
