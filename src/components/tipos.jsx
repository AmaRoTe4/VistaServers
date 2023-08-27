export default function Tipos({ _id, tipos }) {
  return (
    <div
      className="hidden w-full h-auto pb-10"
      id={`lista-de-tipos-${_id}`}
      data-tipos={JSON.stringify(tipos)}>
      <ul className="w-full flex flex-col gap-2 items-center justify-center">
        <li className="w-full flex items-center justify-end p-1">
          <button
            data-id={_id}
            type="button"
            id="btn-form-branch-vista-open"
            className="p-2">
            <img
              src="/plus.svg"
              className="h-[25px] w-[25px]"
              alt="plus"
            />
          </button>
        </li>
        {tipos.length > 0 &&
          tipos.map((m) => {
            return (
              <li
                key={m.name}
                id={m}
                className={`p-1 gap-x-2 w-full flex items-center justify-between tipos-server-${_id} border border-gray-500 bg-gray-300`}>
                <p className="ps-2 h-full w-full flex items-center text-[16px]">
                  {m.name}
                </p>
                <button
                  id={`remove-branch-${_id}-${m.name}`}
                  className="flex items-center justify-center p-2"
                  type="button">
                  <img
                    src="/xmark_black.svg"
                    className="h-[25px] w-[25px] md:h-[16px] md:w-[16px] fill-black"
                    alt="delete"
                  />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
