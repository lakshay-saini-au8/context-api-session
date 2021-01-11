import { useState } from "react";
import List from "./list";
import Navbar from "./navbar";
import Todo from "./todo";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Navbar count={todoList.length} />
      <Todo
        setTodoList={setTodoList}
        setTodoText={setTodoText}
        todoText={todoText}
      />
      <List todoList={todoList} />
    </div>
  );
};

export default App;
