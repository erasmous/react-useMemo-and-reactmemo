import ChildComponent from "./ChildComponent.jsx";
import React from "react";
import { useState, useRef, useMemo } from "react";

//Parent.js
export default function ParentComponent() {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const useMemoRef = useRef(0);
  const incrementUseMemoRef = () => useMemoRef.current++;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedValue = useMemo(() => incrementUseMemoRef(), [times]);

  console.log("Parent Render");

  return (
    <div>
      <button onClick={() => setTimes(times + 1)}>Force Child Render</button>
      <br></br>
      <br></br>
      <button onClick={handleClick}>Increase Count</button>
      <br />
      {count}
      <ChildComponent memoizedValue={memoizedValue} />
    </div>
  );
}
