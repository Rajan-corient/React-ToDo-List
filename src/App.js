import "./App.scss";
import spinach from './assets/spinach.jpeg'
import banana from './assets/banana.jpeg'
import potato from './assets/potato.png'
import brinjal from './assets/brinjal.jpeg'
import onion from './assets/onion.jpg'
import Header from "./my_component/Header";
import { AddTodo } from "./my_component/AddTodo";
import { Todos } from "./my_component/Todos";
import { About } from "./my_component/About";
import Footer from "./my_component/Footer";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grocery } from "./my_component/grocery/Grocery";

function App() {
  let initToDoList;

  let initGroceryList = [
    {
        id: 1,
        name: 'Spinach',
        img: spinach,
        actualPricePerKg: 40,
        discountedPricePerKg: 34,
        weight: '1 KG',
        count: 0
    },               
    {
        id: 2,
        name: 'Alu/Potato',
        img: potato,
        actualPricePerKg: 25,
        discountedPricePerKg: 30,
        weight: '1 KG',
        count: 0
    },                
    {
        id: 3,
        name: 'Banana',
        img: banana,
        actualPricePerKg: 50,
        discountedPricePerKg: 40,
        weight: '1 KG',
        count: 0
    },                
    {
        id: 4,
        name: 'Brinjal',
        img: brinjal,
        actualPricePerKg: 55,
        discountedPricePerKg: 45,
        weight: '1 KG',
        count: 0
    },                
    {
        id: 5,
        name: 'Onion',
        img: onion,
        actualPricePerKg: 40,
        discountedPricePerKg: 36,
        weight: '1 KG',
        count: 0
    }   ,             
    {
        id: 6,
        name: 'Brinjal',
        img: brinjal,
        actualPricePerKg: 40,
        discountedPricePerKg: 36,
        weight: '1 KG',
        count: 0
    },               
    {
        id: 7,
        name: 'Spinach',
        img: spinach,
        actualPricePerKg: 40,
        discountedPricePerKg: 36,
        weight: '1 KG',
        count: 0
    }
  ]

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

    // localStorage.setItem() will behave differently(like async) as setTodoList() doesn't update // immediately, 
    // to overcome this issue we can use useEffect() hook.
    localStorage.setItem("toDoList", JSON.stringify(todoList));
  };


  const [todoList, setTodoList] = useState(initToDoList);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(todoList));
  }, [todoList]);

  // Grocery functionality
  const [groceryList, setGroceryList] = useState(initGroceryList);
  const [totalCartCount, setTotalCartCount] = useState(0);

  const modifyCart = (type, id) => {
    // debugger
    const index = groceryList.findIndex(item => item.id === id);
    const groceryListCopy = [...groceryList];
    console.log(type, id, groceryListCopy);
    if (type === 'firstAdd') {
        groceryListCopy[index].count = 1;
        setGroceryList([...groceryListCopy]);
    } else if(type === 'add'){
        groceryListCopy[index].count =  groceryListCopy[index].count + 1;
        setGroceryList([...groceryListCopy]);
    } else {
        if (groceryListCopy[index].count > 0) {
          groceryListCopy[index].count = groceryListCopy[index].count - 1;
          setGroceryList([...groceryListCopy]); 
        }
    }

    // console.log(groceryList);

    // to get total cart count in header
    const count = groceryList.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.count;
    } ,0);
    setTotalCartCount(count);
  }

  return (
    <div className="App">
      <Router>
        <Header title={"Apna Bazaar"} count={totalCartCount} searchbar={false} />

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
            <Grocery title={'My Grocery List'} groceryList={groceryList} 
            modifyCart={modifyCart} />
          </Route>
        </Switch>

        <Footer productName="MyTodosList.com" />
      </Router>
    </div>
  );
}

export default App;
