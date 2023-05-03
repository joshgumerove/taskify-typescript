import React from "react";
import { Todo } from "./model";

interface Props {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      {todos.map((t) => {
        return <li>{t.todo}</li>;
      })}
    </div>
  );
};

export { TodoList };
