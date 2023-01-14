import "./Formularios.css"
import React, {useState} from "react";
import { Fab, TextField, Select, MenuItem, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Formularios(props) {

  const[nomeCategoria, setNomeCategoria] = useState('')

  function enviarTarefa() {
    console.log("tarefa enviada");
  }
  function enviarCategoria(nome) {
    console.log("o nome da categoria enviada é", nome);
    props.addCategoria(nome)
  }
  return (
    <section className="Formularios-section">
      <form className="Formularios-form">
        <TextField
          className="Formularios-textField"
          label="Adicione uma tarefa"
          variant="outlined"
          color="fourth"
          focused
          sx={{input:{color:"white"}}}
        ></TextField>
        <Select
        labelStyle={{ color: '#BBE1FA' }}
        sx={{
          width:"13rem",
          color: "white",
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#BBE1FA',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#BBE1FA',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#BBE1FA',
          },
          '.MuiSvgIcon-root ': {
            fill: "#BBE1FA !important",
          }
        }}
          
          value={10}
          label="Age"
          variant="outlined"
         // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <Fab
          className="Formularios-addButton"
          color="fourth"
          aria-label="add"
          onClick={(event) => {
            enviarCategoria();
            event.preventDefault();
          }}
        >
          <AddIcon color="primary" />
        </Fab>
      </form>
      <form
      
        className="Formularios-form"
        onSubmit={(event) => {
          enviarCategoria();
          event.preventDefault();
          //  props.proximaPagina();
        }}
      >
        <TextField
          label="Adicione uma Categoria"
          variant="outlined"
          color="fourth"
          focused
          onChange={(event)=>{setNomeCategoria(event.target.value) }}
        ></TextField>
        
        <Fab
          className="Formularios-addButton"
          color="fourth"
          aria-label="add"
          onClick={(event) => {
            enviarCategoria(nomeCategoria);
            event.preventDefault();
          }}
        >
          <AddIcon color="primary" />
        </Fab>
      </form>
    </section>
  );
}
export default Formularios;
