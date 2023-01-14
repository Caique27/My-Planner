import React, { useState, useEffect } from "react";
import "./App.css";
import Lista from "./components/Lista";
import { ThemeProvider } from "@mui/material";
import Formularios from "./components/Formularios";
import theme from "./assets/themes/theme.js";
import {buscarDados, criarCategoria, criarTarefa} from "./axios/actions.js";

function App() {
  //const [dados,setDados] = useState("")
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const atualizarDados = async () => {
      setCategorias(await buscarDados());
    };

    atualizarDados();

    console.log(categorias);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <h1 className="App-titulo">My Planner.</h1>
        </header>
        <section>
          <Formularios data={categorias} addCategoria={criarCategoria} addTarefa={criarTarefa}/>
        </section>
        <main className="App-main">
          {categorias.map((categoria) => (
            <Lista data={categoria} />
          ))}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
