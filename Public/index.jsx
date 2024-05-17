import React, { useEffect } from "react";
import "./style.css";

const Favicon = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "shortcut icon";
    link.href = "%PUBLIC_URL%/favicon.ico";
    document.head.appendChild(link);
  }, []);

  return null;
};

function CurriculoProfissional() {
  return (
    <>
      <Favicon /> {}
      <div>
        <header className="header img">
          <img src="iagojesse.jpg" alt="foto do rosto de iago jesse" />
          <h1>Iago Jessé</h1>
          <h3>Aluno da Usina Academy</h3>
        </header>
        <header>
          <div className="button-group">
            <button id="btnContato">Contato</button>
            <button id="btnPortfolio">Portfólio</button>
            <button id="btnCurriculo">Currículo</button>
          </div>
        </header>
        <section>
          <h2>Proposta Empresarial.</h2>
          <p>BRNT</p>
          <p>
            “Trabalhamos para a evolução da tecnologia em prol do
            desenvolvimento social no Brasil e no mundo, utilizando esta
            ferramenta para auxiliar na melhoria da qualidade de vida da
            sociedade. Nosso objetivo é combater doenças, acelerar a
            modernização governamental, promover a transparência e combater a
            corrupção.” .
          </p>
        </section>
        <section>
          <h2>Formação Academica.</h2>
          <ul>
            <li>
              Ensino médio completo <b>(2021 - 2023).</b>
            </li>
            <br />
            <li>
              Desenvolvedor de Software em formação <b>(2024 - 2024).</b>
            </li>
          </ul>
        </section>
        <section>
          <h2>Experiencia Profissional.</h2>
          <ul>
            <li>Em busca do primeiro emprego.</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default CurriculoProfissional;
