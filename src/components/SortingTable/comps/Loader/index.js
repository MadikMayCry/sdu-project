import React, { Component } from "react";
import "./loader.css";

export class Loader extends Component {
  render() {
    return <div className="lds-dual-ring"></div>;
  }
}

export default Loader;
