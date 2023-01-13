import React, { useState } from "react";

import "./App.css";
import Modal from "./components/modal";

//id, title, isDone
function App() {
  const init = {
    id: "",
    title: "",
    type: 0,
    isImportant: false,
    isDone: false,
  };

  const [tasks, setTasks] = useState([]);
  const [doneTotal, setDoneTotal] = useState(0);
  const [modal, setModal] = useState(0);
  const [taskObj, setTaskObj] = useState(init);

  const addTask = () => {
    console.log(taskObj);

    // const newArr = [...tasks];
    // newArr.push(taskObj);
    // setTasks(newArr);

    if (taskObj.id == "") {
      setTasks([...tasks, { ...taskObj, id: tasks.length }]);
    } else {
      const newArr = tasks.map((e) => {
        if (e.id == taskObj.id) {
          return { ...e, title: taskObj.title };
        } else {
          return e;
        }
      });
      setTasks(newArr);
    }

    setTaskObj(init);
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

  const handleEdit = (a, b, c) => {
    setModal(true);
    setTaskObj({ ...taskObj, id: a, title: b, type: c });
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <h1>Todo List</h1>
          <p>Нийт {tasks.length}</p>
          <p>Хийгдсэн {doneTotal}</p>
          <div className="d-flex gap-3">
            {/* <input
              className="form-control"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Таскаа оруулна уу"
            /> */}
            {/* <button className="btn btn-primary" onClick={addTask}>
              +Add
            </button> */}
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
                <h4>{e.type == "1" ? "Work" : "Personal"}</h4>
              </div>
              <div>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(e.id, e.title, e.type)}
                >
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => objDel(e.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <Modal
          modal={modal} //true, false
          setModal={handleModal}
          addTask={addTask}
          taskObj={taskObj}
          setTaskObj={setTaskObj}
        />
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
