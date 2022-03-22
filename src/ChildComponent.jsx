import React from "react";

//Child.js
//Without React.memo
// export default function Child(props) {
//   console.log("Child Render");
//   return (
//     <div>
//       <h2>{props.name}</h2>
//     </div>
//   );
// }

// //With React.memo
// function ChildComponent(props) {
//   console.log("Child render");
//   return (
//     <div>
//       <h2>{props.name}</h2>
//     </div>
//   );
// }

// export default React.memo(ChildComponent);
// //Add React.memo() HOC to the child component

function ChildComponent({ memoizedValue }) {
  console.log("Child Render");

  return (
    <div>
      <h2>Child Component</h2>
      <p>
        I'll only re-render when you click <b>Force Child Render.</b>
      </p>
    </div>
  );
}

export default React.memo(ChildComponent);
