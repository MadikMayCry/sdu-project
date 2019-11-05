import React, { Component } from "react";
import axios from "axios";
import {
  Layout,
  Col,
  Button,
  Icon,
  Card,
  Avatar,
  List,
  Spin,
  Row,
  Tooltip,
  Breadcrumb
} from "antd";

const { Content } = Layout;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class Users extends React.Component {
  state = {
    loading: true,
    users: []
  };

  componentDidMount() {
    this.getUsers();
  }

  listUsers = () => {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 7
        }}
        dataSource={this.state.users}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                type="star-o"
                text={item.stars}
                key="list-vertical-star-o"
              />
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <a href="#">
                  {item.first_name} {item.last_name}
                </a>
              }
              description={item.description}
            />
            <div className="post-content">{item.content}</div>
          </List.Item>
        )}
      />
    );
  };

  getUsers = async () => {
    let res = await axios.get(`users.json`);
    this.setState({ users: res.data, loading: false });
  };
  render() {
    return (
      <Layout style={{ padding: "15px", background: "" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{ padding: "0 24px", background: "#fff" }}
          className="mainContent"
        >
          <Row>
            {this.state.loading ? (
              <Row className="loadingSpinerContainer" justify="center">
                <Spin />
              </Row>
            ) : (
              this.listUsers()
            )}
          </Row>
        </Content>
      </Layout>
    );
  }
}
