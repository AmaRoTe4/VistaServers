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

  const subir = async () => {
    await fetch(url, options)
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

  await subir();
};
