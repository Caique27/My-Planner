import React from "react";
import "./Tarefa.css";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Tooltip } from "@mui/material";

function Tarefa({ dados }) {
	return (
		<section className="Tarefa-section">
			<h1 className="Tarefa-titulo">{dados.title}</h1>
			<div className="Tarefa-info">
				<IconButton color="fourth">
					{dados.status == "done" ? (
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
					<IconButton color="fourth">
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			</div>
		</section>
	);
}

export default Tarefa;
