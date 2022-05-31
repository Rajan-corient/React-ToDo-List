import React from "react";
import { Todo } from "./Todo";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">My Todos List</h3>
      {/* <Todo todo={props.todos[0]} /> */}
      {props.todos.length === 0
        ? "No ToDos to display"
        : props.todos.map((item, index) => {
            return (
              <Todo todo={item} key={`${item.sno} ${item.title}`} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
