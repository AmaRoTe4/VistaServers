import { getAllData  , createData} from "./firebase.js";

const fetchGet = async (path) => {
  return await fetch(path)
    .then((respuesta) => {
      return respuesta.ok;
    })
    .catch((error) => console.log(error));
};


export default async function ServersState() {
  let retorno = [];
  const data = await getAllData() ?? []
  
  for (let i = 0; data.length > i; i++) {
    const respuesta = await fetchGet(data[i].url);
    retorno.push({
      _id: data[i]._id,
      id: data[i].id,
      titulo: data[i].titulo,
      url: data[i].url,
      estado: true,
      tipos: data[i].tipos,
    });
  }

  return retorno;
}
