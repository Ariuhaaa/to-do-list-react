import React, { useState } from "react";

import "./App.css";
import Modal from "./components/modal";

//id, title, isDone
function App() {
  const init = {
    id: "",
    task: "",
    type: 0,
    isImportant: false,
    isDone: false,
  };

  const [task, setTask] = useState([]); // input
  const [tasks, setTasks] = useState([]);

  const [doneTotal, setDoneTotal] = useState(0);
  const [ID, setId] = useState("0");
  const [modal, setModal] = useState(0);

  const [taskObj, setTaskObj] = useState{init};

  // const [del, setDel] = useState(0);

  const addTask = () => {
    const newObj = {
      // id: createId(),
      title: task,
      isDone: false,
    };
    const newArr = [...tasks];
    if (ID !== "0") {
      newArr.map((e) => {
        if (e.id === ID) {
          e.title = task;
        }
        return e;
      });
    } else {
      newArr.push(newObj);
    }
    // const newArr = [...tasks];

    console.log(newObj);
    setTasks(newArr);
    setTask("");
    setId("0");
    setModal(false);
  };

  const onDoneTask = (id) => {
    const objList = tasks.map((val) => {
      if (val.id === id) {
        console.log(val);

        val.isDone = !val.isDone;

        if (val.isDone) {
          setDoneTotal(doneTotal + 1);
        } else {
          setDoneTotal(doneTotal - 1);
        }
      }
      return val;
    });

    setTasks(objList);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  // const del = () => {
  //   const objDel = () => { () => {setDel(del - 1)}}
  //   }
  // }

  const objDel = (id) => {
    let uldsen = tasks.filter((param) => param.id !== id);
    setTasks(uldsen);
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <h1>Todo List</h1>
          <p>Нийт {tasks.length}</p>
          <p>Хийгдсэн {doneTotal}</p>
          <div className="d-flex gap-3">
            <input
              className="form-control"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Таскаа оруулна уу"
            />
            <button className="btn btn-primary" onClick={addTask}>
              +Add
            </button>
            <button className="btn btn-primary" onClick={handleModal}>
              Modal
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-4">
          {tasks.map((e) => (
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <input
                  type="checkbox"
                  checked={e.isDone}
                  onChange={() => onDoneTask(e.id)}
                />
                <h4>{e.title}</h4>
              </div>
              <div>
                <button className="btn btn-warning">Edit</button>
                <button className="btn btn-danger" onClick={() => objDel(e.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {Modal && (
          <Modal
            modal={modal}
            setModal={handleModal}
            // task={task}
            id={ID}
            setTask={setTask}
            addTask={addTask}
            taskObj = {taskObj}
            setTaskObj = {setTaskObj}
          />
        )}
      </div>
    </div>
  );
}

// const example = () => {
//   return ();
// }

// Array.map() => (

// )

export default App;
