import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload: { title, tags } }) => {
      let tagsSTring = "";
      if (tags.length > 3) {
        tags = tags.slice(0, 3);
      }
      tags.forEach((tag) => {
        tagsSTring += " #" + tag;
      });
      tagsSTring = tagsSTring.slice(1);

      const newsTodo = {
        id: uuid(),
        title: `${title}`,
        status: "CREATED",
        tags: tagsSTring,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
      };
      state.todoList.push(newsTodo);
      localStorage.setItem("todos", JSON.stringify(state.todoList));
    },
    deleteTodo: (state, { payload: { id } }) => {
      const deletedTodo = state.todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: "DELETED",
              updatedAt: new Date().toString(),
            }
          : todo
      );

      state.todoList = deletedTodo;
      localStorage.setItem("todos", JSON.stringify(deletedTodo));
    },
    markCompleted: (state, { payload: { id } }) => {
      const completedTodo = state.todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: "COMPLETED",
              updatedAt: new Date().toString(),
            }
          : todo
      );

      state.todoList = completedTodo;
      localStorage.setItem("todos", JSON.stringify(completedTodo));
    },
  },
});

export const { addTodo, deleteTodo, markCompleted } = todoSlice.actions;
export default todoSlice.reducer;
