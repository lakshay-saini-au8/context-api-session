import React, { useContext } from "react";
import { TodoContext } from "./App";

const Listoflist = () => {
  const { todoList } = useContext(TodoContext);
  return <div>Total Count: {todoList.length}</div>;
};

export default Listoflist;
