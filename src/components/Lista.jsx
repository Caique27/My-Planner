import React, { useState } from "react";
import Tarefa from "./Tarefa.jsx";
import ExcludeDialog from "./Dialogs/ExcludeDialog.jsx";
import "./Lista.css";
import { Button, IconButton, Tooltip, Dialog } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function Lista({ data, deleteCategoria, deleteTarefa }) {
	const [openDialog, setOpenDialog] = useState("none");
	return (
		<div className="Lista-div">
			<header className="Lista-header">
				<h1 className="Lista-titulo">{data.nome}</h1>

				<section className="Lista-icons">
					<Tooltip title="Excluir Categoria" arrow>
						<IconButton
							color="fourth"
							onClick={() => {
								setOpenDialog("Exclude");
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
			<ExcludeDialog
				open={openDialog == "Exclude"}
				closeDialog={() => {
					setOpenDialog("none");
				}}
				deleteCategoria={() => {
					deleteCategoria(data.id);
				}}
			/>
		</div>
	);
}

export default Lista;
