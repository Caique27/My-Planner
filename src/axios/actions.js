import {busca, adicionar, atualizar, excluir} from "./api.js"

export async function buscarDados(){
    return await busca("/categorias")
}

export async function listaCategorias(){
    var categorias =[]
    var data = await buscarDados()
   for(var cat=0;cat<data.length;cat++){
        categorias.push(data[cat].nome)
    }
    return categorias
}

export async function criarCategoria(nome){
    var nomesCategorias = await listaCategorias()
    if(nome.length==0){
        console.log("você deve inserir um nome para a categoria")
    }
    else if(nomesCategorias.includes(nome)){
        console.log(`a categoria ${nome} já existe`)
    }else{
        console.log('é possível criar a categoria com o nome ', nome)
        var novaCategoria = {
            nome:nome,
            tarefas:[]
        }
        adicionar("/categorias",novaCategoria)

    }


}

export function criarTarefa(nome,categoria){

}

