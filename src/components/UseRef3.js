import myStyled from "styled-components";
import React, { useRef, useState } from "react";

const Box = myStyled.div`
  width: 200px;
  height: 200px;
  background-color: pink;
  margin: 30px;
  transition: 0.5s;
  text-align: center;
`;

const UseRef3 = () => {
  const boxRef = useRef(null);
  let [num, setNum] = useState(1);

  const nextRotate = () => {
    setNum(++num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };
  const prevRotate = () => {
    setNum(--num);
    boxRef.current.style.transform = `rotate(${num * 15}deg)`;
  };
  return (
    <div className="borderTop">
      <button onClick={nextRotate}>오른쪽으로</button>
      <button onClick={prevRotate}>왼쪽으로</button>

      <Box ref={boxRef}>box</Box>
    </div>
  );
};

export default UseRef3;
