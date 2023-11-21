import React from "react";
import "./App.css";
import UseRef1 from "../src/components/UseRef1";
import UseRef2 from "./components/UseRef2";
import UseRef3 from "./components/UseRef3";
import UseRef4 from "./components/UseRef4";
import Todos from "./ex/Todos";
import TodosT from "./ex_t/TodosT";

function App() {
  return (
    <>
      <h1>리액트</h1>
      {/*      <UseRef1 />
      <UseRef2 />
      <UseRef3 />
      <UseRef4 />
      <Todos />*/}
      <TodosT />
    </>
  );
}

export default App;
