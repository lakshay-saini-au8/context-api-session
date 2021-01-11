import React from "react";
import { TodoContext } from "./context";

const List = () => {
  return (
    <TodoContext.Consumer>
      {({ todoList }) => {
        return todoList.length === 0
          ? "Empty list"
          : todoList.map((item) => <li key={item.id}>{item.text}</li>);
      }}
      {/*  */}
    </TodoContext.Consumer>
  );
};
export default List;
