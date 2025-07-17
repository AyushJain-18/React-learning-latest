import React, { useCallback } from "react";
import { MemoizedButton } from "./ButtonComponent";

const ButtonContainer = () => {
  const [count, setCount] = React.useState(0);
  const increaseCount = () => setCount(count + 1);
  handleSubmit = () => {
    console.log("Submitted successfully");
  };
  const memoizedHandleSubmit = useCallback(handleSubmit, []);
  return (
    <div>
      <h2>Button Container {count}</h2>
      <button onClick={increaseCount}>increase </button>
      <MemoizedButton name="with-UseCallback" submit={memoizedHandleSubmit} />
      <MemoizedButton name="without-useCallback" submit={handleSubmit} />
    </div>
  );
};

export default ButtonContainer;
