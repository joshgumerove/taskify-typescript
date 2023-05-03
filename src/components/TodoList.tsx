import React from "react";
import { Todo } from "./models";
import "./styles.css";
import { SingleTodo } from "./SingleTodo";

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos?.map((todo) => {
        return (
          <SingleTodo
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export { TodoList };
