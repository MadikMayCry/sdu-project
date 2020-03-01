import React, { Component } from "react";
import ClickBtn from "./ClickBtn";
import HoverBtn from "./HoverBtn";
import User from "./User";
import Counter from "./Counter";

export class RenderProps extends Component {
  render() {
    let username = "Madiyar";
    return (
      <>
        <Counter
          render={(count, incrementCount) => {
            return <ClickBtn count={count} incrementCount={incrementCount} />;
          }}
        />

        <Counter
          render={(count, incrementCount) => {
            return <HoverBtn count={count} incrementCount={incrementCount} />;
          }}
        />

        {/* <ClickBtn /> */}
        {/* <User name={() => username} /> */}
      </>
    );
  }
}

export default RenderProps;
