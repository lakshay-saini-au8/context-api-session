import { useState, createContext, useContext } from "react";
import List from "./list";
import Navbar from "./navbar";
import Todo from "./todo";

// export const TodoContext = createContext({
//   todoList: [{ id: 1, text: "hello" }],
//   setTodoList: function name(params) {},
// });
export const TodoContext = createContext(undefined);
export const TodoDispatch = createContext(undefined);
const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoContext.Provider value={todoList}>
        <TodoDispatch.Provider value={setTodoList}>
          <Navbar />
          <Todo />
          <List />
        </TodoDispatch.Provider>
      </TodoContext.Provider>
    </div>
  );
};

export default App;
