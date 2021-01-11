import { useContext, useState } from "react";
import { TodoContext } from "./App";
const Todo = () => {
  const { setTodoList } = useContext(TodoContext);
  // console.log(data);

  const [todoText, setTodoText] = useState("");
  const handelChange = (e) => {
    const data = e.target.value;
    setTodoText(data);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const final = {
      id: Math.floor(Math.random() * 1000) + 1,
      text: todoText,
    };
    setTodoList((prev) => [...prev, final]);
    setTodoText("");
  };
  return (
    <div>
      <h4>Create TODO list</h4>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={handelChange} value={todoText} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Todo;
