import { createSelector } from "reselect";
// Input selector to get the todos array from state
const selectTodos = (state) => state.todos;
// Memoized selector to get completed todos
export const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((todo) => todo.completed === true)
);
