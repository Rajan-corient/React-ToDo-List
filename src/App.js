import "./App.scss";
import Header from "./my_component/Header";
import { AddTodo } from "./my_component/AddTodo";
import { Todos } from "./my_component/Todos";
import { About } from "./my_component/About";
import Footer from "./my_component/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grocery } from "./my_component/Grocery";

function App() {
  let initToDoList;
  let initGroceryList;

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

    // localStorage.setItem() will behave differently as setTodoList() doesn't update immediately, 
    // to overcome this issue we can use useEffect() hook.
    localStorage.setItem("toDoList", JSON.stringify(todoList));
  };

  if (localStorage.getItem("groceryList") === null) {
    initGroceryList = [];
  } else {
    initGroceryList = JSON.parse(localStorage.getItem("groceryList"));
  }
  
  const addGrocery = (name, quantity) => {
    const snumber = groceryList.length ? ++groceryList[groceryList.length - 1].id : 1;
    const myItem = {
      id: snumber,
      name: name,
      quantity: quantity
    };
    console.log(myItem);
    setTodoList([...groceryList, myItem]);
  };

  const onDeleteGrocery = (grocery) => {
    console.log(grocery);

    setGroceryList(
      groceryList.filter((item) => {
        return item !== grocery;
      })
    );
    localStorage.setItem("toDoList", JSON.stringify(groceryList));
  };

  const [todoList, setTodoList] = useState(initToDoList);
  const [groceryList, setGroceryList] = useState(initGroceryList)

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(todoList));
  }, [todoList]);  

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [groceryList]);

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
          <Route exact path="/grocery">
            <Grocery title={'My Grocery List'} groceryList={groceryList}/>
          </Route>
        </Switch>

        <Footer productName="MyTodosList.com" />
      </Router>
    </div>
  );
}

export default App;
