import React from "react";
import { useSelector } from "react-redux";
import { selectCompletedTodos } from "../redux/selector";

const TotalCompleteItems = () => {
  const todos = useSelector(selectCompletedTodos);

  return <h4 className="mt-3">Total complete items: {todos.length}</h4>;
};

export default TotalCompleteItems;
