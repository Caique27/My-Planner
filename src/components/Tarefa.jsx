import React from "react";

function Tarefa({dados}){
    return(
        <section>
            <h1>{dados.title}</h1>
            <p>{dados.status}</p>
            <p>{dados.category}</p>
        </section>
    )
    
}

export default Tarefa