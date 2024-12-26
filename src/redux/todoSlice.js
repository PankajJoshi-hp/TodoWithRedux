import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: 1, title: "Wake up at 7:30 AM", completed: false },
      { id: 2, title: "Take a bath at 9", completed: false },
      { id: 3, title: "Move to office", completed: true },
      { id: 4, title: "Have lunch at the  park", completed: false },
      { id: 5, title: "Complete the given tasks", completed: false },
    ],
    filteredTodos: [],
  },

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date().getTime(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(todo);
      state.filteredTodos = state.todos;
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    filterTodo: (state, action) => {
      state.filteredTodos = state.todos.filter((todo) =>
        todo.title.toLowerCase().includes(action.payload.title.toLowerCase())
      );
    },
    clearFilter: (state) => {
      return state;
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index].item === action.payload.title;
        state.filteredTodos = state.todos;
      }
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  filterTodo,
  clearFilter,
  editTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
