//import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header';
import { Todos } from "./Mycomponents/Todos";
import About from './Mycomponents/About';
import { Footer } from "./Mycomponents/Footer";
import React, { useState, useEffect } from 'react';
import AddTodo from './Mycomponents/AddTodo';
import { BrowserRouter as Router, Routes, Route} from "../node_modules/react-router-dom";


function App() {
  let intiTodo;
  if (localStorage.getItem("todos") === null) {
    intiTodo = [];
  } else {
    intiTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am delete of todo:", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo: ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(intiTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
          <Routes>
          <Route exact path="/" element={<><AddTodo addTodo={addTodo} /><Todos todos={todos} onDelete={onDelete} /></>} />
          <Route exact path="/about" element={<About />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
