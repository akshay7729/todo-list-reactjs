import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { TODO } from "../../Redux/Constants";

const AddTodoList = () => {
  const getList = useSelector((state) => state.todo);
  const itemCompleteDispatch = useDispatch();
  const handleListItemComplete = (e) => {
    const completeTodoList = [...getList.completed];
    const currentTodoList = [...getList.add];
    currentTodoList.splice(currentTodoList.indexOf(e.target.value), 1);
    completeTodoList.push(e.target.value);
    itemCompleteDispatch({
      type: TODO.COMPLETED,
      payload: completeTodoList,
    });
    itemCompleteDispatch({
      type: TODO.ADD,
      payload: currentTodoList,
    });
  };
  return (
    <div className="pt-5">
      {getList.add &&
        getList.add.map((list, index) => {
          return (
            <div className="list-item px-4 py-2 mb-3" key={index}>
              <TodoItem
                checked={false}
                index={index}
                list={list}
                handleTodoItem={handleListItemComplete}
              />
            </div>
          );
        })}
    </div>
  );
};

export default AddTodoList;
