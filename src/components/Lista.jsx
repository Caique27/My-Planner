import React,{ useState } from "react";
import Tarefa from "./Tarefa.jsx"

function Lista({data}){
    
    
   return(
    <div className="Lista-div">
        <h1>
            {data.nome}
        </h1>
        <p>
        {data.tarefas.map( (tarefa) => <Tarefa dados={tarefa}/>)  }
        </p>
    </div>
    
   ) 
}

export default Lista;