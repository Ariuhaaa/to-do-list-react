import React from "react";

export default function Modal({
  setModal,
  modal,

  addTask,
  taskObj,
  setTaskObj,
}) {
  const dn = modal ? "block" : "none";
  return (
    <div className="modal" style={{ display: dn }} onClick={setModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>Засах</h2>
        </div>
        <div className="w-100">
          <input
            id="fwdfvds"
            className="form-control"
            type="text"
            value={taskObj.title}
            onChange={(e) => {
              // const newO = { ...taskObj };
              // newO.title = e.target.value;
              // setTaskObj(newO);

              console.log({ ...taskObj, title: e.target.value });

              setTaskObj({ ...taskObj, title: e.target.value });
            }}
            placeholder="Таскаа оруулна уу"
          />
          <select
            value={taskObj.type}
            onChange={(e) => {
              setTaskObj({ ...taskObj, type: e.target.value });
            }}
          >
            <option value="0">Select</option>
            <option value="1">Work</option>
            <option value="2">Personal</option>
          </select>
          <input type="hidden" value={taskObj.id} />
          <button className="btn btn-primary modalBtn col-3" onClick={addTask}>
            +Нэмэх
          </button>
          <hr />
          <div className="btn btn-danger col-2" onClick={setModal}>
            Хаах
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

// export default function Toolbar() {
//   return (
//   <div>
//   <PlayButton movieName="Kiki's Delivery Service" />
//   <UploadButton />
//   </div>
//   );
//   }

//   function PlayButton({ movieName }) {
//     function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//     }
//     return (
//     <Button onClick={handlePlayClick}>
//     Play "{movieName}"
//     </Button>
//     );
//     }

//   function UploadButton() {

//       return (
//       <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//       </Button>
//       );
//       }
