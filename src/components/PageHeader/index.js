import React from "react";
import { User } from "../../App";
import { Layout, Menu, Col } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
let Header;
export default Header = () => {
  return (
    <Layout.Header className="header">
      <Col span={2}>
        <div className="logo" />
      </Col>
      <Col span={20}>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/Testing">Testing</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/sorting-table">Table</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/sidebar">SideBar</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={2}>
        <UserInfo />
      </Col>
    </Layout.Header>
  );
};

const UserInfo = () => (
  <User.Consumer>
    {value => <p style={{ color: "#fff" }}>{value.user.name}</p>}
  </User.Consumer>
);
