import React from "react";
import "./style.css";
import imagesData from "./caminho/para/o/arquivo.json";

function PortfolioTrabalhos() {
  return (
    <div className="pagina2">
      <header>
        <div className="button-group">
          <button id="btnContato">Contato</button>
          <button id="btnPortfolio">Portfólio</button>
          <button id="btnCurriculo">Currículo</button>
        </div>
      </header>
      <div className="sections">
        {imagesData
          .filter((image) => image.name !== "foto iago jesse")
          .map((image) => (
            <section key={image.id}>
              <img src={image.src} alt={image.alt} />
            </section>
          ))}
      </div>
    </div>
  );
}

export default PortfolioTrabalhos;
