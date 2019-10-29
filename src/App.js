import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import About from "./components/About";

import "antd/dist/antd.css";
import {
  Layout,
  Menu,
  Button,
  Breadcrumb,
  Icon,
  Card,
  Avatar,
  Row,
  Anchor,
  Divider,
  Descriptions,
  Tag,
  Tooltip
} from "antd";

const { SubMenu } = Menu;

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Layout style={{ padding: "24px 0", background: "#fff" }}>
              <Switch>
                <Route exact path="/">
                  <Posts />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
