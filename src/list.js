import React from "react";

const List = ({ todoList }) => {
  console.log(todoList);
  return todoList.length === 0
    ? "Empty list"
    : todoList.map((item) => <li>{item.text}</li>);
};
export default List;
