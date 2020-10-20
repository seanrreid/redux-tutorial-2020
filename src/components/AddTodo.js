import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({addTodo}) => {
  const [input, setInput] = useState("");
  const _updateInput = (input) => {
    setInput(input);
  };

  const _handleAddTodo = () => {
    // dispatches actions to add todo
    addTodo(input);
    // sets state back to empty string
    setInput("");
  };

  return (
    <div>
      <input
        onChange={(e) => _updateInput(e.target.value)}
        value={input}
      />
      <button className="add-todo" onClick={_handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
