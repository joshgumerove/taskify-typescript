import React from "react";
import { Todo } from "./models";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map((t) => {
        return <li>{t.todo}</li>;
      })}
    </div>
  );
};

export { TodoList };
