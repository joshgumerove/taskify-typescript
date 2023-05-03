import React from "react";
import "./styles.css";

const InputField: React.FC = () => {
  return (
    <form className="input">
      <input type="input" placeholder="enter a task" className="input__box" />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export { InputField };
