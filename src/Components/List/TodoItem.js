import React from "react";
import Form from "react-bootstrap/Form";

const TodoItem = (props) => {
  return (
    <Form>
      <Form.Group controlId={`listcheck-${props.index}`} className="mb-0">
        <Form.Check
          type="checkbox"
          checked={props.checked}
          label={props.list}
          value={props.list}
          onChange={(e) => props.handleTodoItem(e)}
        />
      </Form.Group>
    </Form>
  );
};

export default TodoItem;
