import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo, clearFilter } from "../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) =>
    state.todos.filteredTodos.length > 0
      ? state.todos.filteredTodos
      : state.todos.todos
  );
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const handleFilterTodo = (e) => {
    const query = e.target.value;
    setSearchText(query);
    dispatch(filterTodo({ title: query }));
  };

  const handleClearFilter = () => {
    setSearchText("");
    dispatch(clearFilter());
  };

  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Search todo.."
        value={searchText}
        onChange={handleFilterTodo}
      />
      <button onClick={handleClearFilter}>Clear Filter</button>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
