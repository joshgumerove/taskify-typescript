import React from "react";
import { Todo } from "./models";
import "./styles.css";
import { SingleTodo } from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  // setCompletedTodos(todos.filter((todo) => todo.isDone));

  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos.map((todo) => (
              <SingleTodo
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                key={todo.id} // need to remember to include this when mapping
              />
            ))}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            {completedTodos.map((todo) => (
              <SingleTodo
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
                key={todo.id}
              />
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export { TodoList };
