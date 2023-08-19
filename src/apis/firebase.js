import db from "../db/firebase";
import { collection, query, addDoc, getDocs, doc } from "firebase/firestore";
import { newId } from "../funciones/id";

export const getAllData = async () => {
  try {
    const result = collection(db, "sitios");
    const data = await getDocs(result);
    let retorno = [];
    data.forEach((n) => {
      retorno.push({ ...n.data(), _id: n.id });
    });
    return retorno;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const createData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "sitios"), {
      ...data,
      id: newId(),
    });
    console.log("creado con exito: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const addBranch = async (name , conexion_tipos) => {
  //try {
  //  const docRef = await addDoc(collection(db, "sitios"), {...data , id: newId()});
  //  console.log("creado con exito: ", docRef.id);
  //} catch (e) {
  //  console.error("Error adding document: ", e);
  //}
};

export const removeBranch = async (name , conexion_tipos) => {
    //try {
    //  const docRef = await addDoc(collection(db, "sitios"), {...data , id: newId()});
    //  console.log("creado con exito: ", docRef.id);
    //} catch (e) {
    //  console.error("Error adding document: ", e);
    //}
  };

export const updateData = async (data) => {
  try {
    const docRef = doc(db, "sitios", data._id);
    return await updateDoc(docRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (_id) => {
  return await deleteDoc(doc(db, "sitios", _id));
};
