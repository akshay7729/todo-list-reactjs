import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { TODO } from "../../Redux/Constants";

const Search = () => {
  const searchInput = useRef("");
  const [errorMsg, setErrorMsg] = useState(null);
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
    } else if (searchInput.current.value.length === 0) {
      setErrorMsg("Error! You cannot leave the feild empty");
    } else {
      setErrorMsg("Some error occured");
    }
  };

  const handleFormValidation = () => {
    setErrorMsg(null);
  };

  return (
    <div className="pt-4">
      <Form className="todo-search-form d-flex">
        <Form.Group controlId="todoSearch" className="flex-grow-1 mb-0">
          <Form.Control
            type="text"
            placeholder="Add todo"
            ref={searchInput}
            onKeyUp={handleFormValidation}
          />
        </Form.Group>
        <Button variant="primary" className="ml-3" onClick={handleAddToDo}>
          Submit
        </Button>
      </Form>
      {errorMsg && <div className="error pt-3">{errorMsg}</div>}
    </div>
  );
};

export default Search;
