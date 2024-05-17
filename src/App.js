import React from "react";
import ContactForm from "./components/ContactForm";
import Button from "./components/Button";
import "./styles/App.css";

function App() {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} clicado`);
  };

  return (
    <div className="App">
      <Button text="Contato" onClick={() => handleButtonClick("Contato")} />
      <Button text="Portfolio" onClick={() => handleButtonClick("Portfolio")} />
      <Button text="Curriculo" onClick={() => handleButtonClick("Curriculo")} />
      <ContactForm />
    </div>
  );
}

export default App;
