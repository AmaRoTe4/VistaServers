import { ACCESS_TOKEN, REPOOWNER, REPONAME } from "../const.ts";

export const subirFile = async (filePath, newFileContent) => {
  const username = "AmaRoTe4";
  const url = `https://api.github.com/repos/${REPOOWNER}/${REPONAME}/contents/${filePath}`;

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${username}:${ACCESS_TOKEN}`)}`,
    },
    body: JSON.stringify({
      message: "Creando un nuevo archivo",
      content: btoa(JSON.stringify(newFileContent)),
    }),
  };

  return await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al crear el archivo:", error.message);
    });
};
