import React, { useState } from "react";
import Tarefa from "./Tarefa.jsx";
import ExcludeDialog from "./Dialogs/ExcludeDialog.jsx";
import RenameDialog from "./Dialogs/RenameDialog.jsx";
import "./Lista.css";
import { Button, IconButton, Tooltip, Dialog } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function Lista({
	data,
	deleteCategoria,
	deleteTarefa,
	renameCategoria,
	mensagem,
	changeStatus,
}) {
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
						<IconButton
							color="fourth"
							onClick={() => {
								setOpenDialog("Rename");
							}}
						>
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
						changeStatus={changeStatus}
						categoriaId={data.id}
						tarefaId={tarefa.id}
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
			<RenameDialog
				open={openDialog == "Rename"}
				closeDialog={() => {
					setOpenDialog("none");
				}}
				renameCategoria={renameCategoria}
				idCategoria={data.id}
				mensagem={mensagem}
			/>
		</div>
	);
}

export default Lista;
