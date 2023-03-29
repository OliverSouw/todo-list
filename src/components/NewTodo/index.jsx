import { useState } from "react";

import "./style.css";

const NewTodo = ({ onNewTodo }) => {
  const ESC_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESC_KEY) {
      erase();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="O que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default NewTodo;
