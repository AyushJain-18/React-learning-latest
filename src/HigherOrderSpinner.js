import React from "react";

const Spinner = () => <div> Spinner </div>;

const withSpinner = (Component) => {
  const withSpinnerComponent = (props) => {
    return props.isLoading ? <Spinner /> : <Component {...props} />;
  };
  return withSpinnerComponent;
};

export default withSpinner;
