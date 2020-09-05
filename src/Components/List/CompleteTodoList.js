import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { TODO } from "../../Redux/Constants";
import Button from "react-bootstrap/Button";

const CompletedTodoList = () => {
  const getList = useSelector((state) => state.todo);
  const itemCompleteDispatch = useDispatch();
  const handleItemCompleteUncheck = (e) => {
    const completeTodoList = [...getList.completed];
    const currentTodoList = [...getList.add];
    completeTodoList.splice(completeTodoList.indexOf(e.target.value), 1);
    currentTodoList.push(e.target.value);
    itemCompleteDispatch({
      type: TODO.COMPLETED,
      payload: completeTodoList,
    });
    itemCompleteDispatch({
      type: TODO.ADD,
      payload: currentTodoList,
    });
  };
  const handleClearCompleted = () => {
    itemCompleteDispatch({
      type: TODO.COMPLETED,
      payload: [],
    });
  };
  return (
    <div className="pt-5">
      <div className="pb-4">
        {getList.completed.length ? <div>Completed List</div> : <div></div>}
      </div>
      {getList.completed &&
        getList.completed.map((list, index) => {
          return (
            <div className="list-item px-4 py-2 mb-3" key={index}>
              <TodoItem
                checked={true}
                index={index}
                list={list}
                handleTodoItem={handleItemCompleteUncheck}
              />
            </div>
          );
        })}
      {getList.completed.length ? (
        <Button onClick={handleClearCompleted}>Clear Completed</Button>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default CompletedTodoList;
