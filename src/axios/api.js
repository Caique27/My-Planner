import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const busca = async (url) => {
  const resposta = await api.get(url);
  return resposta.data;
};
export const adicionar = async (url, novaCategoria) => {
  await api.post(url, novaCategoria);
};
export const atualizar = async (url,alteracoesCategoria)=>{
  await api.put(url,alteracoesCategoria)
};
export const excluir = async(url)=>{
  await api.delete(url)
}