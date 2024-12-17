import React, { useEffect, useState } from "react";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Todo() {
  const [task, setName] = useState("");
  const [res, setUsername] = useState([]);

  function success() {
    toast.success("To Do Muvafaqiyatli Qo'shildi", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  function deleted() {
    toast.error("To Do Muvafaqiyatli O'chirildi", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function handleClick(e) {
    e.preventDefault();
    if (task) {
      setUsername([...res, { task, checked: false }]);
      localStorage.setItem(
        "todo",
        JSON.stringify([...res, { task, checked: false }])
      );
    }
    success();
    setName("");
  }

  useEffect(() => {
    const save = localStorage.getItem("todo");
    if (save) {
      setUsername(JSON.parse(save));
    }
  }, []);

  function handleDelete(index) {
    const isDelete = confirm("Rostdan Ham Shu To Doni Ochirmooqchimisiz?");
    if (isDelete) {
      const filterTask = res.filter((e, i) => i != index);
      setUsername(filterTask);
      localStorage.setItem("todo", JSON.stringify(filterTask));
    }
    deleted();
  }

  function handleCheckbox(index) {
    const updatedTasks = res.map((element, i) =>
      i == index ? { ...element, checked: !element.checked } : element
    );
    setUsername(updatedTasks);
    localStorage.setItem("todo", JSON.stringify(updatedTasks));
  }

  const chart = res.filter((e) => e.checked).length;
  const prog = res.length ? (chart / res.length) * 100 : 0;

  return (
    <div className="todo">
      <div className="container">
        <div className="top-content">
          <h2>1.masala</h2>
          <h1>To-do List va Progress Bar</h1>
        </div>
        <form className="">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={task}
            type="text"
            className="input"
            placeholder="Enter Your To Do..."
          />
          <button className="add-button" onClick={handleClick}>
            Add
          </button>
        </form>
        <div className="todo-list">
          {res.length > 0 &&
            res.map((value, index) => (
              <div key={index} className="todo-item">
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    checked={value.checked}
                    onChange={() => handleCheckbox(index)}
                  />
                  <h6 className={`${value.checked ? "line-through" : ""} `}>
                    {value.task}
                  </h6>
                </div>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <p>delete</p>
                </button>
              </div>
            ))}
        </div>
        {res.length > 0 && (
          <div className="chart">
            <div
              style={{ width: `${prog}%` }}
              className="bg-[#5361e4] overflow-hidden h-4"
            ></div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Todo;
