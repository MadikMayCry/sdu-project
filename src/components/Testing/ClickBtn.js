import React, { Component } from "react";

export default class ClickBtn extends Component {
  render() {
    let { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clicked {count} times</button>;
  }
}
