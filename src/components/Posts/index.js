import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import "./App.css";

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
  Col,
  Divider,
  Descriptions,
  Tag,
  Tooltip,
  List
} from "antd";

const { SubMenu } = Menu;

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "/post",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

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

  listPosts = () => {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 5
        }}
        dataSource={this.state.currentData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star-o" text="156" key="list-vertical-star-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />,
              <IconText type="user" text={item.author} key="list-vertical-message" />
            ]}
            extra={<img width={272} alt="logo" src={item.image} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    );
  };
  posts = () =>
    this.state.currentData.map((item, index) => (
      <Col span={8} className="user-post-wrapper" key={index} id={item.id}>
        <Card
          style={{ margin: "10px" }}
          className="user-post"
          cover={<img alt={item.title} src={item.image} />}
          actions={[
            <Tooltip title="Response">
              <Button type="link" shape="round" icon="like"></Button>
            </Tooltip>,
            <Tooltip title="Response">
              <Button type="link" shape="round" icon="plus"></Button>
            </Tooltip>,
            <Tooltip title="Details">
              <Button type="link">
                <Icon type="right" />
              </Button>
            </Tooltip>
          ]}
        >
          <Meta
            title={<Tooltip title={item.title}>{item.title}</Tooltip>}
            description={item.description}
          />
        </Card>
      </Col>
    ));

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
    await axios.get(`https://raw.githubusercontent.com/MadikMayCry/sdu-project/master/public/data.json`).then(res =>
      this.setState({
        data: res.data
      })
    );
  };

  render() {
    return (
      <>
        <Sider width={"auto"} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={this.state.activeFaculty}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            {this.state.loading ? <div>Loading...</div> : this.aside()}
          </Menu>
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 280 }}>
          <Row>
            {this.state.loading ? <div>Loading...</div> : this.listPosts()}
          </Row>
        </Content>
      </>
    );
  }
}

export default Posts;
