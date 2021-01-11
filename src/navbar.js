import { useContext } from "react";
import { TodoContext } from "./App";

const Navbar = () => {
  const { todoList } = useContext(TodoContext);

  return <div>Total Count:{todoList.length}</div>;
};

export default Navbar;
