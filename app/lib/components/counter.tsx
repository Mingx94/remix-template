import * as React from "react";

export const Counter = ({ name = "" }: { name?: string }) => {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <h1>Hello {name}!</h1>
      <button onClick={handleClick}>{count}</button>
    </>
  );
};
