import { LOCALES_COMERCIALES, SDN_USUARIOS, UTN } from "../const";

const data = [
  {
    titulo: "SDN Usuarios",
    url: SDN_USUARIOS,
    estado: false,
    tipos: []
  },
  {
    titulo: "Locales Comerciales",
    url: LOCALES_COMERCIALES,
    estado: false,
    tipos: []
  },
  {
    titulo: "UTN",
    url: UTN,
    estado: false,
    tipos: []
  },
];

const fetchGet = async (path) => {
  return await fetch(path)
    .then((data) => {
      return data.ok;
    })
    .catch((error) => console.log(error));
};

export default async function ServersState() {
  let retorno = [];
  for (let i = 0; data.length > i; i++) {
    const respuesta = await fetchGet(data[i].url);
    retorno.push({
      titulo: data[i].titulo,
      url: data[i].url,
      estado: respuesta,
      tipos: data[i].tipos
    });
  }
  return retorno;
}
