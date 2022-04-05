import React from "react";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
// redux
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mx-auto text-center py-5 bg-light">
        <h1>The count is : {count} </h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </>
  );
};

export default App;
