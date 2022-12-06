import React, { useState, useEffect } from "react";
import Lista from "./components/Lista";
import {busca,adicionar,atualizar,excluir} from "./axios/api.js"

function App() {

  const [dados,setDados] = useState("")
  
  useEffect(() => {
    
    const atualizarDados = async()=>{
         setDados( await busca("/tarefas"))
    }
      
    atualizarDados()
    
      console.log('useEffect chamado')
  }, []);

  return (
    <div>
    <h1>
      Este é o app
    </h1>
    <section>
      <Lista data={dados}/>
      
    </section>
    </div>
  );
}

export default App;
