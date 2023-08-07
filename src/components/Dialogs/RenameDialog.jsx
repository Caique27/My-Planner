import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
} from "@mui/material";
import "./RenameDialog.css";

function RenameDialog(props) {
	const [nome, setNome] = useState("");

	return (
		<Dialog open={props.open}>
			<DialogTitle className="dialog-style">
				{"Renomear Categoria"}
			</DialogTitle>

			<DialogContent className="dialog-style">
				<TextField
					label="Insira o nome da categoria"
					variant="outlined"
					className="RenameDialog-input"
					color="fourth"
					sx={{ input: { color: "white" } }}
					focused
					onChange={(event) => {
						setNome(event.target.value);
					}}
					value={nome}
				/>
				<div className="Lista-dialog-buttons">
					<Button
						color="fourth"
						onClick={() => {
							props.closeDialog();
							setNome("");
						}}
					>
						Cancelar
					</Button>
					<Button
						color="fourth"
						variant="outlined"
						onClick={() => {
							props.renameCategoria(props.idCategoria, nome);

							props.closeDialog();

							setNome("");
						}}
					>
						Renomear
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default RenameDialog;
