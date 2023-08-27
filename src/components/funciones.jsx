export default function Funciones({ id }) {
  return (
    <div
      data-id={id}
      id={"opciones-vista-" + id}
      className="hidden justify-between gap-5 md:hidden w-full pb-2">
      <div>
        <button
          type="button"
          className={`flex md:hidden btn-desplegable-${id} p-2`}>
          <img
            src="/arrow_down.svg"
            className="h-[25px] w-[25px]"
            alt="nube"
          />
        </button>
      </div>
      <div className="flex gap-4">
        <button
          data-id={id}
          type="button"
          className={`p-2 ${"cloud-memori-" + id}`}>
          <img
            src="/cloud.svg"
            className="h-[25px] w-[25px]"
            alt="nube"
          />
        </button>
        <button
          type="button"
          data-id={id}
          className={`btn-delete-element-${id} p-2`}>
          <img
            src="/xmark_black.svg"
            className="h-[25px] w-[25px]"
            alt="nube"
          />
        </button>
      </div>
    </div>
  );
}
