import "./App.css";
import Header from "./my_component/Header";
import { AddTodo } from "./my_component/AddTodo";
import { Todos } from "./my_component/Todos";
import { About } from "./my_component/About";
import Footer from "./my_component/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initToDoList;
  if (localStorage.getItem("toDoList") === null) {
    initToDoList = [];
  } else {
    initToDoList = JSON.parse(localStorage.getItem("toDoList"));
  }
  const addTodo = (title, desc) => {
    const snumber = todoList.length ? ++todoList[todoList.length - 1].sno : 1;
    const myTodo = {
      sno: snumber,
      title: title,
      desc: desc,
    };
    console.log(myTodo);
    setTodoList([...todoList, myTodo]);
  };

  const onDelete = (todo) => {
    console.log(todo);
    // deleting this way does not work in react
    // let index = todoList.indexOf(todo);
    // todoList.splice(index, 1);
    setTodoList(
      todoList.filter((item) => {
        return item !== todo;
      })
    );
    localStorage.setItem("toDoList", JSON.stringify(todoList));
  };

  const [todoList, setTodoList] = useState(initToDoList);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="App">
      <Router>
        <Header title={"ToDo List"} count={10} searchbar={false} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo todos={todoList} addTodo={addTodo} />
                  <Todos todos={todoList} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer productName="MyTodosList.com" />
      </Router>
    </div>
  );
}

export default App;
