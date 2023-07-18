import React, { useState } from "react";
import Tarefa from "./Tarefa.jsx";
import "./Lista.css";
import {
	Button,
	IconButton,
	Tooltip,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function Lista({ data, deleteCategoria, deleteTarefa }) {
	const [openDialog, setOpenDialog] = useState(false);
	return (
		<div className="Lista-div">
			<header className="Lista-header">
				<h1 className="Lista-titulo">{data.nome}</h1>

				<section className="Lista-icons">
					<Tooltip title="Excluir Categoria" arrow>
						<IconButton
							color="fourth"
							onClick={() => {
								setOpenDialog(true);
							}}
						>
							<DeleteOutlineIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Renomear Categoria" arrow>
						<IconButton color="fourth">
							<EditIcon />
						</IconButton>
					</Tooltip>
				</section>
			</header>

			<p className="Lista-tarefas">
				{data.tarefas.map((tarefa) => (
					<Tarefa
						data={tarefa}
						deleteTarefa={deleteTarefa}
						categoriaId={data.id}
					/>
				))}
			</p>
			<Dialog open={openDialog} className="Lista-dialog">
				<DialogTitle className="dialog-style">
					{"Excluir Categoria"}
				</DialogTitle>

				<DialogContent className="dialog-style">
					<DialogContentText color="fourth" className="dialog-style">
						Tem certeza que deseja excluir a categoria?
					</DialogContentText>
					<div className="Lista-dialog-buttons">
						<Button
							color="fourth"
							onClick={() => {
								setOpenDialog(false);
							}}
						>
							Não
						</Button>
						<Button
							color="fourth"
							variant="outlined"
							onClick={() => {
								deleteCategoria(data.id);
							}}
						>
							Sim, excluir
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default Lista;
