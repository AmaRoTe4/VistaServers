import db from "../db/firebase.js";
import {
  collection,
  deleteDoc,
  updateDoc,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { newId } from "../funciones/id.js";

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

export const getData = async (userId) => {
  try {
    const userDocRef = doc(db, "sitios", userId);
    const data = await getDoc(userDocRef);
    if (!data.exists()) return console.log("data no encontrada");
    return data.data();
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

export const addBranch = async (name, userId) => {
  if (name === "") return console.log("valor nulo");
  try {
    const userDocRef = doc(db, "sitios", userId);
    const data = await getDoc(userDocRef);
    if (!data.exists()) return console.log("data no encontrada");
    await updateDoc(userDocRef, {
      tipos: [...data.data().tipos, name],
    });
    console.log("creado con exito");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const removeBranch = async (name, userId) => {
  try {
    const userDocRef = doc(db, "sitios", userId);
    const data = await getDoc(userDocRef);
    if (!data.exists()) return console.log("data no encontrada");
    await updateDoc(userDocRef, {
      tipos: data.data().tipos.filter((n) => n.name !== name),
    });
    console.log("removido con exito");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateData = async (data) => {
  try {
    const docRef = doc(db, "sitios", data._id);
    return await updateDoc(docRef, data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id) => {
  return await deleteDoc(doc(db, "sitios", id));
};
