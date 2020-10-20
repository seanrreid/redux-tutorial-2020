import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function App() {
  return (
    <div className="todo-app">
      <h1>Todo List - Redux Edition</h1>
      <h2>QUACK QUACK!!</h2>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
