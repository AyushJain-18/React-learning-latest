import React from "react";

export const ButtonComponent = (props) => {
  console.log("Button component is rendered", props.name);
  return (
    <div>
      <button onClick={props.submit}>Submit</button>
    </div>
  );
};

export const MemoizedButton = React.memo(ButtonComponent);
