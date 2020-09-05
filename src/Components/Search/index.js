import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { TODO } from "../../Redux/Constants";

const Search = () => {
  const searchInput = useRef("");
  const todoList = useSelector((state) => state.todo);
  const todoDispatch = useDispatch();
  const handleAddToDo = () => {
    if (searchInput.current.value) {
      const currentTodoList = [...todoList.add];
      currentTodoList.push(searchInput.current.value);
      todoDispatch({
        type: TODO.ADD,
        payload: currentTodoList,
      });
      searchInput.current.value = "";
    }
  };

  return (
    <div className="pt-4">
      <Form className="todo-search-form d-flex">
        <Form.Group controlId="todoSearch" className="flex-grow-1 mb-0">
          <Form.Control type="text" placeholder="Add todo" ref={searchInput} />
        </Form.Group>
        <Button variant="primary" className="ml-3" onClick={handleAddToDo}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Search;
