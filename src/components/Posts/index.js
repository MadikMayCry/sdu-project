import React, { Component } from "react";
import axios from "axios";

import ListPosts from "./../ListPosts";
import "./App.css";

import { Layout, Menu, Spin, Icon, Row } from "antd";

const { Content, Sider } = Layout;

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      activeFaculty: "Business School",
      facultyNames: {},
      data: {},
      currentData: {}
    };
  }

  async componentDidMount() {
    await this.getData();
    await this.sortByFaculty();
  }

  changeFaculty = props => {
    let tempFac = props.key;

    this.setState(
      {
        activeFaculty: tempFac
      },
      this.sortByFaculty
    );
  };

  aside = () =>
    this.state.facultyNames.map((item, index) => (
      <Menu.Item key={item} onClick={this.changeFaculty}>
        <Icon type="desktop" />
        <span>{item}</span>
      </Menu.Item>
    ));

  sortByFaculty = async () => {
    let tempData = this.state.data.filter(
      item => item.faculty == this.state.activeFaculty
    );

    let uniqType = Array.from(
      new Set(this.state.data.map(e => e.faculty))
    ).filter(e => e);

    this.setState({
      currentData: tempData,
      facultyNames: uniqType,
      loading: false
    });
  };

  getData = async () => {
    await axios.get(`data.json`).then(res =>
      this.setState({
        data: res.data
      })
    );
  };

  render() {
    return (
      <Layout style={{ margin: "24px 0", padding: "15px", background: "#fff" }}>
        <Sider width={"auto"} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={this.state.activeFaculty}
            defaultOpenKeys={["sub1"]}
          >
            {this.state.loading ? (
              <Row className="loadingSpinerContainer" justify="center">
                <Spin />
              </Row>
            ) : (
              this.aside()
            )}
          </Menu>
        </Sider>
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
              <ListPosts posts={this.state.currentData} />
            )}
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default Posts;
