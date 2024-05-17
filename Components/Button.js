import React from "";
import { ButtonComponent } from "./Button.js";

function App() {
  // Funções para lidar com cliques nos botões
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicado`);
  };

  return (
    <div>
      <ButtonComponent
        text="btnCurriculo"
        onClick={() => handleButtonClick("btnCurriculo")}
      />
      <ButtonComponent
        text="btnPortfolio"
        onClick={() => handleButtonClick("btnPortfolio")}
      />
      <ButtonComponent
        text="btnContato"
        onClick={() => handleButtonClick("btnContato")}
      />
    </div>
  );
}

export default App;
