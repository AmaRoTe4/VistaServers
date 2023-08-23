export const fetchData = async (url , clave = "") => {
  const headers = new Headers();
  headers.append("Accept", "application/json");
  const requestOptions = {
    method: "GET",
    headers: {
        ...headers,
        clave
    },
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Hubo un error:", error);
    });
};
