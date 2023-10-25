import { busca, adicionar, atualizar, excluir } from "./api.js";

export async function buscarDados() {
	return await busca("/tasks/get");
}

export async function buscarCategorias() {
	return await busca("/categories/get");
}

export async function listaCategorias() {
	var data = await buscarCategorias();
	return data;
}

export async function criarCategoria(nome) {
	var nomesCategorias = [];
	var categorias = await listaCategorias();
	for (var c = 0; c < categorias.length; c++) {
		nomesCategorias.push(categorias[c].name);
	}

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
			name: nome,
		};
		try {
			adicionar("/categories/create", novaCategoria);
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
		var idCategoria;
		var categorias = await buscarCategorias();
		for (var c = 0; c < categorias.length; c++) {
			if (categorias[c].name == categoria) {
				idCategoria = categorias[c].id;
			}
		}

		var novaTarefa = {
			title: nome,
			category_id: idCategoria,
		};

		try {
			adicionar(`/tasks/create`, novaTarefa);
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
}
export async function excluirCategoria(id) {
	try {
		await excluir(`/categories/delete/${id}`);
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

export async function excluirTarefa(idTarefa) {
	console.log(idTarefa);
	try {
		excluir(`/tasks/delete/${idTarefa}`);
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
		var nomesCategorias = [];
		var categorias = await listaCategorias();
		for (var c = 0; c < categorias.length; c++) {
			nomesCategorias.push(categorias[c].name);
		}
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

		atualizar(`/categories/change/${id}`, { name: novoNome });
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
		message: "Categoria atualizada com sucesso",
	};
}

export async function mudarStatus(idTarefa) {
	try {
		atualizar(`/tasks/change/${idTarefa}`, { body: 0 });
		return {
			open: true,
			error: false,
			message: "Tarefa atualizada com sucesso",
		};
	} catch {
		return {
			open: true,
			error: true,
			message: `Erro ao atualizar tarefa`,
		};
	}
}
