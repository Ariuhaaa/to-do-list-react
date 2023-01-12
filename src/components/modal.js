import React from "react";

export default function Modal({ setModal, modal, id, task, setTask, addTask, taskObj }) {
  const dn = modal ? "block" : "none";
  return (
    <div className="modal" style={{ display: dn }} onClick={setModal}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>Zasah</h2>
        </div>
        <div className="w-100">
          <input
            id="fwdfvds"
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="taskaa oruul"
          />
          <input type="hidden" value={id} />
          <button className="btn btn-primary" onClick={addTask}>
            +Add
          </button>
          <hr />
          <div className="btn btn-light" onClick={setModal}>
            Haah
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