import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTodo({
          title: value,
        })
      );
      setValue("");
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex items-center space-x-3 bg-white p-4 rounded-md shadow-md mt-5"
      >
        <input
          type="text"
          className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Add a new todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
