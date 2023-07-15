import React, { useState } from "react";
import Tarefa from "./Tarefa.jsx";
import "./Lista.css";

import { IconButton, Tooltip } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function Lista({ data }) {
	return (
		<div className="Lista-div">
			<header className="Lista-header">
				<h1 className="Lista-titulo">{data.nome}</h1>
				<section className="Lista-icons">
					<Tooltip title="Excluir Categoria" arrow>
						<IconButton color="fourth">
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
					<Tarefa dados={tarefa} />
				))}
			</p>
		</div>
	);
}

export default Lista;
