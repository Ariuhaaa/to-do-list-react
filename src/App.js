import React, { useState } from "react";

import "./App.css";

//id, title, isDone
function App() {
  const [task, setTask] = useState(""); // input
  const [tasks, setTasks] = useState([]);

  const [doneTotal, setDoneTotal] = useState(0);

  // const [del, setDel] = useState(0);

  const addTask = () => {
    const newObj = {
      id: tasks.length,
      title: task,
      isDone: false,
    };
    const newArr = [...tasks];
    newArr.push(newObj);
    console.log(newObj);
    setTasks(newArr);
    setTask("");
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
