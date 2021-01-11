import { useState, createContext } from "react";
import List from "./list";
import Navbar from "./navbar";
import Todo from "./todo";

export const TodoContext = createContext(undefined);
const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoContext.Provider value={{ todoList, setTodoList }}>
        <Navbar />
        <Todo />
        <List />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
