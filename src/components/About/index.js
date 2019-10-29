import React, { Component } from "react";
import axios from "axios";
import { Layout, Col, Button, Icon, Card, Avatar, Row, Tooltip } from "antd";

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
      <>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Row>
            {this.state.users.map((e, i) => (
              <Col span={6} className="user-post-wrapper" key={i} id={i}>
                <div>{e.first_name}</div>
              </Col>
            ))}
            ;
          </Row>
        </Content>
      </>
    );
  }
}
