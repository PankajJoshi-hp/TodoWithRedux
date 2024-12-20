import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

const App = () => {
  return (
    <div className="flex flex-col w-[75%] mt-20 justify-self-center bg-green-200 justify-between ">
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
