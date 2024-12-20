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
    <form
      onSubmit={onSubmit}
      className="form-inline mt-3 mb-3 flex justify-between px-4"
    >
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2 flex-auto mr-10"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="submit" className="btn btn-primary mb-2 px-5">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
