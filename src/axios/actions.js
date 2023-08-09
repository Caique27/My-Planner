import { busca, adicionar, atualizar, excluir } from "./api.js";

export async function buscarDados() {
	return await busca("/categorias");
}

export async function listaCategorias() {
	var categorias = [];
	var data = await buscarDados();
	for (var cat = 0; cat < data.length; cat++) {
		categorias.push(data[cat].nome);
	}
	return categorias;
}

export async function criarCategoria(nome) {
	var nomesCategorias = await listaCategorias();
	if (nome.length == 0) {
		return {
			open: true,
			error: true,
			message: "Preencha o nome da nova categoria",
		};
	} else if (nomesCategorias.includes(nome)) {
		return {
			open: true,
			error: true,
			message: `a categoria ${nome} já existe`,
		};
	} else {
		var novaCategoria = {
			nome: nome,
			tarefas: [],
		};
		try {
			adicionar("/categorias", novaCategoria);
		} catch (error) {
			return {
				open: true,
				error: true,
				message: "erro ao enviar a tarefa",
			};
		}
		return {
			open: true,
			error: false,
			message: `A nova categoria foi criada`,
		};
	}
}

export async function criarTarefa(nome, categoria) {
	if (categoria.length == 0 || nome.length == 0) {
		return {
			open: true,
			error: true,
			message: "Preencha o nome e a categoria",
		};
	} else {
		var data = await buscarDados();
		var categoriaTarefa;
		for (var c = 0; c < data.length; c++) {
			if (data[c].nome == categoria) {
				categoriaTarefa = data[c];
			}
		}

		var listaIDs = [];

		var novaTarefa = {
			title: nome,
			status: "undone",
			category: categoria,
			id: getLowestId(),
		};

		var listaTarefas = [...categoriaTarefa.tarefas, novaTarefa];

		categoriaTarefa.tarefas = listaTarefas;
		try {
			atualizar(`/categorias/${categoriaTarefa.id}`, categoriaTarefa);
		} catch (error) {
			return {
				open: true,
				error: true,
				message: "erro ao enviar a tarefa",
			};
		}

		return {
			open: true,
			error: false,
			message: "Tarefa enviada com sucesso",
		};
	}

	function getLowestId() {
		for (var a = 0; a < categoriaTarefa.tarefas.length; a++) {
			listaIDs.push(categoriaTarefa.tarefas[a].id);
		}
		if (listaIDs.length == 0) {
			return 1;
		} else {
			for (var c = 1; c <= listaIDs.length + 1; c++) {
				if (!listaIDs.includes(c)) {
					return c;
				}
			}
		}
	}
}
export async function excluirCategoria(id) {
	try {
		await excluir(`/categorias/${id}`);
	} catch {
		return {
			open: true,
			error: true,
			message: "Erro ao excluir a categoria",
		};
	}
	return {
		open: true,
		error: false,
		message: "Categoria excluída com sucesso",
	};
}

export async function excluirTarefa(idCategoria, idTarefa) {
	var data = await busca(`/categorias/${idCategoria}`);

	for (var task = 0; task < data.tarefas.length; task++) {
		if (data.tarefas[task].id == idTarefa) {
			data.tarefas.splice(task, 1);
		}
	}
	try {
		atualizar(`/categorias/${idCategoria}`, data);
	} catch {
		return {
			open: true,
			error: true,
			message: "Falha ao excluir tarefa",
		};
	}
	return {
		open: true,
		error: false,
		message: "Tarefa excluída com sucesso",
	};
}

export async function renomearCategoria(id, novoNome) {
	//
	try {
		var data = await busca(`/categorias/${id}`);
		var nomesCategorias = await listaCategorias();
		if (nomesCategorias.includes(novoNome)) {
			return {
				open: true,
				error: true,
				message: "Já existe uma categoria com este nome",
			};
		}
		if (novoNome == "") {
			return {
				open: true,
				error: true,
				message: "Você deve inserir um nome",
			};
		}
		data.nome = novoNome;
		atualizar(`/categorias/${data.id}`, data);
	} catch {
		return {
			open: true,
			error: true,
			message: "Erro ao atualizar tarefa",
		};
	}
	return {
		open: true,
		error: false,
		message: "Tarefa atualizada com sucesso",
	};
}

export async function mudarStatus(idCategoria, idTarefa) {
	

	try {

var categoria = await busca(`/categorias/${idCategoria}`);
	var tarefaEscolhida;
	for (var c = 0; c < categoria.tarefas.length; c++) {
		if (categoria.tarefas[c].id == idTarefa) {
			tarefaEscolhida = categoria.tarefas[c];
			categoria.tarefas.splice(c, 1);
			if (tarefaEscolhida.status == "done") {
				tarefaEscolhida.status = "undone";
			} else {
				tarefaEscolhida.status = "done";
			}
			categoria.tarefas = [
				...categoria.tarefas.slice(0, c),
				tarefaEscolhida,
				...categoria.tarefas.slice(c),
			];
			break;
		}
	}





		atualizar(`/categorias/${categoria.id}`, categoria);
		return {
			open: false,
			error: false,
			message: ``,
		};
	} catch {
		return {
			open: true,
			error: true,
			message: `Erro ao atualizar tarefa`,
		};
	}
}
