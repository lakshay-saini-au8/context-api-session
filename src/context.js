import { useState, createContext } from "react";
export const TodoContext = createContext(undefined);

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
