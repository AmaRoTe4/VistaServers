import { REPOOWNER, REPONAME , ACCESS_TOKEN } from "../const.ts";

export const getDataForContent = async (repo = "") => {
  const url = `https://api.github.com/repos/${REPOOWNER}/${REPONAME}/contents${repo !== "" ? "/" + repo : ""}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${username}:${ACCESS_TOKEN}`)}`,
    }
  };

  await fetch(url , options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error al crear el archivo");
      }
    })
    .then((data) => {
      console.log("Archivo creado exitosamente:", data.content.html_url);
    })
    .catch((error) => {
      console.error("Error al crear el archivo:", error.message);
    });
};
