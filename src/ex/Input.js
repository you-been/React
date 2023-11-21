import React from "react";

const Input = ({ onAdd, text, changeInput }) => {
  return (
    <div>
      <input type="text" id="userText" value={text} onChange={changeInput} />
      <button onClick={onAdd}>추가</button>
    </div>
  );
};

export default Input;
