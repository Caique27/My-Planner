import React, { useState } from "react";
import "./Tarefa.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	Tooltip,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	Button,
} from "@mui/material";

function Tarefa({ data, deleteTarefa, categoriaId }) {
	const [openDialog, setOpenDialog] = useState(false);
	return (
		<section className="Tarefa-section">
			<h1 className="Tarefa-titulo">{data.title}</h1>
			<div className="Tarefa-info">
				<IconButton color="fourth">
					{data.status == "done" ? (
						<Tooltip title="Marcar como não feita" arrow>
							<DoneOutlineIcon />
						</Tooltip>
					) : (
						<Tooltip title="Marcar como feita" arrow>
							<DoneIcon />
						</Tooltip>
					)}
				</IconButton>
				<Tooltip title="Excluir Tarefa" arrow>
					<IconButton
						color="fourth"
						onClick={() => {
							setOpenDialog(true);
						}}
					>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			</div>
			<Dialog open={openDialog} className="Tarefa-dialog">
				<DialogTitle className="dialog-style">
					{"Excluir Tarefa"}
				</DialogTitle>

				<DialogContent className="dialog-style">
					<DialogContentText color="fourth" className="dialog-style">
						Tem certeza que deseja excluir a tarefa?
					</DialogContentText>
					<div className="Tarefa-dialog-buttons">
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
								deleteTarefa(categoriaId, data.id);
								setOpenDialog(false);
							}}
						>
							Sim, excluir
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</section>
	);
}

export default Tarefa;
