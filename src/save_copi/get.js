import { REPOOWNER, REPONAME , USERMANE , ACCESS_TOKEN } from "../const.ts";

export const getDataForContent = async (repo = "") => {
  const url = `https://api.github.com/repos/${REPOOWNER}/${REPONAME}/contents${repo !== "" ? "/" + repo : ""}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${btoa(`${USERMANE}:${ACCESS_TOKEN}`)}`,
    }
  };

  return await fetch(url , options)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error("Vistal feil", error.message);
    });
};
