import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Textbox from "./component/Textbox";

function App() {
  const [mode, setmode] = useState("light");
  const [texts, setTexts] = useState("E.D.M");
  const toogleMode = () => {
    if (mode === "dark") {
      setmode("light");
      setTexts("E.D.M");
      document.body.style.backgroundColor = "#d3d9df";
    } else {
      setmode("dark");
      setTexts("D.D.M");
      document.body.style.backgroundColor = "#171b1f";
    }
  };
  return (
    <>
      <Navbar title="Text" texts={texts} mode={mode} toogleMode={toogleMode} />
      <Textbox mode={mode} />
    </>
  );
}

export default App;
