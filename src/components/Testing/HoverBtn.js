import React, { Component } from "react";
let HoverBtn;
export default HoverBtn = props => {
  let { count, incrementCount } = props;
  return (
    <div>
      <button onMouseOver={incrementCount}>Hovered {count} times</button>
    </div>
  );
};
