import React, { useRef, useState } from "react";

const UseRef2 = () => {
  const [count, setCount] = useState(1);
  //특정 값을 저장하기 위해 사용. 특정 값이 변경되어도 랜더링이 일어나지 않음. 즉 랜더링을 하고 싶지 않을 때 사용
  const countRef = useRef(1);

  console.log("랜더링 + 1");

  const increamentState = () => {
    setCount(count + 1);
  };
  const incrementRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div className="borderTop">
      <h2>useRef2</h2>
      <h3>
        {/* 랜더링이 따로 일어나지 않지만 증가의 값은 계속 가지고 있음 */}
        카운트(useState) : {count} / 카운트(useRef) : {countRef.current}
      </h3>
      <p>
        <button onClick={increamentState}>useState()</button>
        <button onClick={incrementRef}>useRef()</button>
      </p>
    </div>
  );
};

export default UseRef2;
