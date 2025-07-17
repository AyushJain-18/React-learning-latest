import React, { useState, useMemo } from "react";

const MemoizedFunctionResult = (props) => {
  // Simulating a heavy computation
  const calculateResult = () => {
    console.log("Memoized Calculating result started...", props.number);
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += i;
    }
    result += props.number;
    console.log("Calculating result finished...", result);
    return result;
  };

  // Memoized result of the expensive calculation
  const memoizedResult = useMemo(() => calculateResult(), [props.number]);
  const UnMemoizedResult = () => {
    console.log("Normal Calculating result started...", props.number);
    let result = 0;
    for (let i = 0; i < 100; i++) {
      result += i;
    }
    result += props.number;
    console.log("Normal result finished...", result);
    return result;
  };

  return (
    <>
      <div>Memoized Result: {memoizedResult}</div>
      <div>UNMemoized Result: {UnMemoizedResult()}</div>
    </>
  );
};

export default MemoizedFunctionResult;
