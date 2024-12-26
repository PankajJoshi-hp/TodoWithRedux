import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[80%] h-screen mx-auto my-auto bg-green-100 rounded-lg shadow-xl">
      <div className="w-[90%] p-3 bg-green-200 rounded-md shadow-md z-10">
        <AddTodoForm />
      </div>

      <div className="flex flex-col w-[90%] mt-4 flex-grow overflow-y-auto bg-white rounded-md shadow-inner p-4">
        <TodoList />
        <div className="mt-4 self-start">
          <TotalCompleteItems />
        </div>
      </div>
    </div>
  );
};

export default App;
