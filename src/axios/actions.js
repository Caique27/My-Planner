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
    console.log("você deve inserir um nome para a categoria");
  } else if (nomesCategorias.includes(nome)) {
    console.log(`a categoria ${nome} já existe`);
  } else {
    console.log("é possível criar a categoria com o nome ", nome);
    var novaCategoria = {
      nome: nome,
      tarefas: [],
    };
    adicionar("/categorias", novaCategoria);
  }
}

export async function criarTarefa(nome, categoria) {
  if (categoria.length == 0 || nome.length == 0) {
    
    return({error:true,message:'Preencha o nome e a categoria'})
    
  } else {
    var data = await buscarDados();
    var categoriaTarefa;
    for (var c = 0; c < data.length; c++) {
      if (data[c].nome == categoria) {
        categoriaTarefa = data[c];
      }
    }

    var listaIDs = []

    function getLowestId(){
      for(var a = 0; a< categoriaTarefa.tarefas.length;a++){
        listaIDs.push(categoriaTarefa.tarefas[a].id)

      }
      if(listaIDs.length==0){
        return 1
      }else{
        for(var c=1;c<=listaIDs.length+1;c++){
          if(!listaIDs.includes(c)){return c}
        }
      }
    }

    var novaTarefa = {
      title:nome,
      status:"undone",
      category:categoria,
      id:getLowestId()
    }

    var listaTarefas = [...categoriaTarefa.tarefas, novaTarefa]

    categoriaTarefa.tarefas = listaTarefas
    try{
      atualizar(`/categorias/${categoriaTarefa.id}`,categoriaTarefa)
    }catch(error){
      return({error:true,message:"erro ao enviar a tarefa"})
    }
    
    return({error:false,message:''})
    
  }
}