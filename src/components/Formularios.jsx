import "./Formularios.css";
import React, { useState } from "react";
import { Fab, TextField, Select, MenuItem, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Formularios(props) {
	const [nomeCategoria, setNomeCategoria] = useState("");
	const [nomeTarefa, setNomeTarefa] = useState("");
	const [categoriaEscolhida, setCategoriaEscolhida] = useState("");

	function enviarTarefa(nome, categoriaEscolhida) {
		props.addTarefa(nome, categoriaEscolhida);
		console.log("tarefa enviada");
	}
	function enviarCategoria(nome) {
		console.log("o nome da categoria enviada é", nome);
		props.addCategoria(nome);
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
					sx={{ input: { color: "white" } }}
					onChange={(event) => {
						setNomeTarefa(event.target.value);
					}}
				></TextField>

				<Select
					labelStyle={{ color: "#BBE1FA" }}
					color="fourth"
					sx={{
						width: "13rem",
						color: "white",
						".MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						"&:hover .MuiOutlinedInput-notchedOutline": {
							borderColor: "#BBE1FA",
						},
						".MuiSvgIcon-root ": {
							fill: "#BBE1FA !important",
						},
					}}
					value={categoriaEscolhida}
					label="Categoria"
					variant="outlined"
					onChange={(event) => {
						setCategoriaEscolhida(event.target.value);
					}}
				>
					{props.nomesCategorias.map((categoria) => (
						<MenuItem value={categoria}>{categoria}</MenuItem>
					))}
				</Select>
				<Tooltip title="Criar Tarefa">
					<Fab
						className="Formularios-addButton"
						color="fourth"
						aria-label="add"
						onClick={(event) => {
							enviarTarefa(nomeTarefa, categoriaEscolhida);
							event.preventDefault();
						}}
					>
						<AddIcon color="primary" />
					</Fab>
				</Tooltip>
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
					sx={{ input: { color: "white" } }}
					onChange={(event) => {
						setNomeCategoria(event.target.value);
					}}
				></TextField>
				<Tooltip title="Criar Categoria">
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
				</Tooltip>
			</form>
		</section>
	);
}
export default Formularios;
