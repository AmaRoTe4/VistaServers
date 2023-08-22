import { ACCESS_TOKEN , REPOOWNER , REPONAME } from "../const.js";

export const updateFile = async (filePath, newFileContent) => {
  const url = `https://api.github.com/repos/${REPOOWNER}/${REPONAME}/contents/${filePath}`;
  const encodedContent = Buffer.from(JSON.stringify(newFileContent)).toString(
    "base64"
  );

  await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })
    .then((response) => response.json())
    .then((fileData) => {
      const updatePayload = {
        message: "Actualizando archivo",
        content: encodedContent,
        sha: fileData.sha,
      };

      return fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePayload),
      });
    })
    .then((response) => {
      if (response.status === 200) {
        console.log("Archivo actualizado.");
      } else {
        console.error("Error al actualizar el archivo:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error al actualizar el archivo:", error);
    });
};
