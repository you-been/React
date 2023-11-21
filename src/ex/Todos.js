import React, { useState } from "react";
import Input from "./Input";
import Lists from "./Lists";
import todoStyle from "./todo.module.css";

const Todos = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [addLine, setAddLine] = useState(false);
  const onAdd = () => {
    if (text === "") {
      alert("내용을 작성해 주세요");
      return;
    }
    setData((prevItem) => [...prevItem, { id: prevItem.length, text: text }]);
    setText("");
  };
  const onDel = (i) => {
    setData(data.filter((item) => item.id !== i));
  };
  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const onLine = (evt) => {
    const done = evt.target;
    setAddLine(done);
  };
  return (
    <div className={todoStyle.wrapper}>
      <h2 className={todoStyle.title}>오늘 할 일 ✔</h2>
      {/* 입력 받는 컴포넌트 */}
      {/* 리스트 출력 컴포넌트(1. 출력, 2. 삭제 3. 완료) */}
      <Input onAdd={onAdd} changeInput={changeInput} />
      <Lists
        onDel={onDel}
        data={data}
        ul={todoStyle.ul}
        li={todoStyle.li}
        btn={todoStyle.btn}
        onLine={onLine}
        addLine={addLine}
      />
    </div>
  );
};

export default Todos;
