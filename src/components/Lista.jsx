import React,{ useState } from "react";
import Tarefa from "./Tarefa.jsx"

function Lista({data}){
    
   return(
    <p>
        {data.map( (tarefa) => <Tarefa dados={tarefa}/>)  }
    </p>
   ) 
}

export default Lista;