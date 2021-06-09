//one of the components and needed to connect to useState react
import { useState } from 'react'
//import is like 'let/const/var' and from is like '=' with ending of the path"
//changed Header to unicorn and the code still works
//header is the file name which is under componenets
import Unicorn from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

function App() {
//if u put a string in the useState, it will come out a string, the code below shows the array
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

  
// i'm not sure why the id is a whole number but is random. I thought with a todo list you want the numbers to be in order

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}
    setTodos([...todos, newTodo])
  }

  //make sure the name above matches the name insaide the div
  //unicorn, AddTodo, List are components
  //title, onAdd, todo as the name's of the props
  return (
    <div className="container">
      <Unicorn title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={todos}/>
    </div>
  );
}

//export is like 'return' for an api
export default App;
