import React from "react";
import withSpinner from "./HigherOrderSpinner";
import useFetch from "./useFetchHook";
import { useAppContext } from "./context";

export const ComponentToConsumeProviderValue = () => {
  const { number, incrementNumber } = useAppContext();
  return (
    <div>
      <h2> Component To Consume Provider Value </h2>
      <button onClick={incrementNumber}> Inc </button>
      <span>Hello, your values are {number}</span>
    </div>
  );
};

// here we are utilizing useFetch hook
const FetchDataContainer = () => {
  // const api = "https://dummy.restapiexample.com/api/v1/employees";
  const api2 = "https://dummyjson.com/product";
  const [data, isLoading, error] = useFetch(api2);
  return (
    <EnhancedFunctionalComponent
      data={data}
      isLoading={isLoading}
      error={error}
    />
  );
};

const DisplayFetchProducts = (props) => {
  console.log("Props in FunctionalComonent are", props);
  return (
    <div>
      FunctionalComonent will reder{" "}
      {JSON.stringify(props?.data?.products[0]?.title)}
    </div>
  );
};
let EnhancedFunctionalComponent = withSpinner(DisplayFetchProducts);

export default FetchDataContainer;
