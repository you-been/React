import React from "react";

const Lists = ({ onDel, data, ul, li, btn, onLine, addLine }) => {
  return (
    <div>
      <ul className={ul}>
        {data.map((item) => (
          <li
            key={item.id}
            className={li}
            onClick={() => onLine(item.id)}
            style={{ textDecoration: addLine ? "line-through" : "none" }}>
            {item.text}
            <button onClick={() => onDel(item.id)} className={btn}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
