import React, { Component } from "react";
import axios from "axios";
import {
  Layout,
  Col,
  Button,
  Icon,
  Card,
  Avatar,
  Row,
  Tooltip,
  Breadcrumb
} from "antd";

const { Content } = Layout;

export default class About extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    let { data } = res.data;
    this.setState({ users: data });
  };
  render() {
    return (
      <Layout style={{ padding: "15px", background: "" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          Content
        </div>
      </Layout>
    );
  }
}
