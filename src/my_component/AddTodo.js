import React, { useState } from "react";
import "./AddTodo.css";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const AddingTodo = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can not be blank");
    }
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
    // adding this way does not work in react
    // props.todos.push({
    //   sno: ++props.todos[props.todos.length - 1].sno,
    //   title: "todo1",
    //   desc: "todo1 description",
    // });
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form className="addToDo">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="description"
          />
        </div>
        <button
          type="submit"
          onClick={AddingTodo}
          className="btn btn-sm btn-success"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
