import ServersState from "../apis/index.js";
import { useState, useEffect } from "react";
import Tipos from "./tipos.jsx";
import Funciones from "./funciones.jsx";

export default function Respuestas() {
  const [respuesta, setRespuesta] = useState([]);

  useEffect(() => {
    cargarData();
  }, []);

  const cargarData = async () => {
    const data = await ServersState();
    if (data == null) return;
    setRespuesta(data);
  };

  return (
    <ul
      className="flex flex-col w-full items-center gap-2 py-10 md:py-0 md:pb-10"
      id="lista_server">
      {respuesta &&
        respuesta.map(({ _id, url, titulo, estado, tipos }) => {
          return (
            <li
              key={_id}
              id={_id}
              className="w-[95%] md:w-[80%] flex flex-col items-center gap-5 md:gap-2 rounded-md">
              <div className="w-full h-auto flex justify-between gap-5 md:gap-0">
                <span
                  data-id={_id}
                  id={`vista-server-${_id}`}
                  className="flex justify-center items-center w-full min-w-[225px] md:w-[86%] border border-black rounded-md">
                  <div className="w-full md:w-[80%] flex px-3 py-2">
                    <h3>{titulo}</h3>
                  </div>
                  <div className="w-[70px] md:w-[20%] flex justify-end items-center px-3 py-2">
                    <a
                      href={url}
                      title={titulo}
                      target="_blank"
                      className={`
                      border border-black
                    ${
                      estado ? "bg-green-600" : "bg-red-600"
                    } h-[40px] w-[40px] rounded-full
                    `}
                    />
                  </div>
                </span>
                <div className="hidden w-[50px] md:w-[7%] md:flex justify-center items-center">
                  <button
                    type="button"
                    data-id={_id}
                    className={`btn-delete-element-${_id} p-2`}>
                    <img
                      src="/xmark_black.svg"
                      className="h-[25px] w-[25px]"
                      alt="nube"
                    />
                  </button>
                </div>
                <div className="hidden md:flex w-[50px] md:w-[7%] justify-center items-center">
                  <button
                    type="button"
                    className={`hideen md:flex btn-desplegable-${_id} p-2`}>
                    <img
                      src="/arrow_down.svg"
                      className="h-[25px] w-[25px]"
                      alt="nube"
                    />
                  </button>
                </div>
              </div>
              <Funciones id={_id} />
              <Tipos
                _id={_id}
                tipos={tipos}
              />
            </li>
          );
        })}
    </ul>
  );
}
