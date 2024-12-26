import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleEditTodo = () => {
    setIsEditing(true);
    console.log("Started Editing");
  };

  const handleSaveTodo = () => {
    dispatch(editTodo({ id, title: editTitle }));
    setIsEditing(false);
    console.log("Saved Successfully");
  };

  const handleCancelClick = () => {
    setEditTitle(editTitle);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-self-center w-[90%] justify-between items-center bg-green-50 rounded-md shadow-md py-2 px-4 mb-3">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
            onChange={handleCheckboxClick}
            checked={completed}
          />

          {isEditing ? (
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          ) : (
            <span
              className={`text-lg font-medium ${
                completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {title}
            </span>
          )}
        </div>

        {isEditing ? (
          <div className="flex gap-3">
            <button
              onClick={handleSaveTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleEditTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
