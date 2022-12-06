import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const busca = async (url) => {
  const resposta = await api.get(url);
  return resposta.data;
};
export const adicionar = async (url, novaTarefa) => {
  await api.post(url, novaTarefa);
};
export const atualizar = async (url,alteracoesTarefa)=>{
  await api.put(url,alteracoesTarefa)
};
export const excluir = async(url)=>{
  await api.delete(url)
}