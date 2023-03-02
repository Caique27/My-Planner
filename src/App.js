import React, { useState, useEffect } from "react";
import "./App.css";
import Lista from "./components/Lista";
import { ThemeProvider, Snackbar, Alert } from "@mui/material";
import Formularios from "./components/Formularios";
import theme from "./assets/themes/theme.js";
import {
  listaCategorias,
  buscarDados,
  criarCategoria,
  criarTarefa,
} from "./axios/actions.js";

function App() {
  //const [dados,setDados] = useState("")
  const [categorias, setCategorias] = useState([]);
  const [nomesCategorias, setNomesCategorias] = useState([]);
  const [mensagem, setMensagem] = useState({ error: false, message: "" });

  useEffect(() => {
    const atualizarDados = async () => {
      setCategorias(await buscarDados());
      setNomesCategorias(await listaCategorias());
    };

    atualizarDados();
  }, []);

  function adicionarCategoria(nome) {
    
    criarCategoria(nome);
    
  }

  async function adicionarTarefa(nome, categoriaEscolhida) {
    setMensagem(await criarTarefa(nome, categoriaEscolhida));
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <h1 className="App-titulo">My Planner.</h1>
        </header>
        <section>
          <Formularios
            nomesCategorias={nomesCategorias}
            data={categorias}
            addCategoria={adicionarCategoria}
            addTarefa={adicionarTarefa}
          />
        </section>
        <main className="App-main">
          {categorias.map((categoria) => (
            <Lista data={categoria} />
          ))}
        </main>
        <Snackbar
          open={mensagem.error}
          autoHideDuration={2500}
          anchorOrigin={{vertical: 'bottom',
          horizontal: 'center', }}
          onClose={()=>setErros({ error: false, message: "" }
            
            )}
        >
          <Alert
            onClose={()=>setErros({ error: false, message: "" }
            
            )}
            severity="error"
            sx={{ width: "100%" }}
          >
            {mensagem.message}
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
}

export default App;
