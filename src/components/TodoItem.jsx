import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className=" flex justify-between bg-green-100">
      <li
        className={`list-group-item ${completed && "list-group-item-success"}`}
      >
        <div className="flex justify-between gap-5">
          <span className="">
            <input
              type="checkbox"
              className="mr-3"
              onChange={handleCheckboxClick}
              checked={completed}
            />
            {title}
          </span>
          <button
            onClick={handleDeleteClick}
            className="border-solid border-red-200"
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
