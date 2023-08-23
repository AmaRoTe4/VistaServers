import { getDataForContent } from "../save_copi/get.js" 
import { subirFile } from "../save_copi/create.js" 
import { getData } from "./firebase.js" 
import { fetchData } from "../funciones/fetch.js" 
import { fechaNow } from "../funciones/fecha.js" 

export const existenciaFile = async (name, folderName) => {
    const respuesta = await getDataForContent(folderName + "/" + name)
    return Boolean(respuesta)
}

export const updateFile = async (name, folderName) => {
    return false;
}

const crearNewFile = async (name, folderName , respuesta ,  clave = "") => {
    const tipo = respuesta.tipos.find(n => n.name === name)
    if(!tipo) return console.log("tipo no encontrado")
    const urlCreate = folderName + "/" + tipo.name + "/" + fechaNow() + ".json"

    const urlData = respuesta.url + tipo.path
    const data = await fetchData(urlData , clave)

    const resultado = await subirFile(urlCreate , data)
    return resultado
}   

export const crearNewFiles = async (_id) => {
    const respuesta = await getData(_id)
    if(!respuesta) return alert("Error al pedir la info")

    const tipos = respuesta.tipos
    const titulo = respuesta.titulo
    let resultados = []

    for(let i = 0 ; i < tipos.length ; i++){
        const resultado = await crearNewFile(tipos[i].name , titulo , respuesta , "g5crc35s2e")
        resultados.push(resultado)
    }
}   