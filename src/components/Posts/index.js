import React, { Component } from "react";
import axios from "axios";

import ListPosts from "./../ListPosts";
import "./App.css";

import { Layout, Menu, Spin, Icon, Row, Input, Col } from "antd";

const { Search } = Input;

const { Content, Sider } = Layout;

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      activeFaculty: "Business School",
      facultyNames: {},
      data: {},
      searchText: "",
      filteredData: {},
      searchedData: {}
    };
  }

  async componentDidMount() {
    await this.getData();
    await this.sortByFaculty();
    this.setState({ loading: !this.state.loading });
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

  searchPost = e => {
    this.setState({ searchText: e.target.value });

    let searchedData = this.state.filteredData.filter(post => {
      return post.title
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase());
    });

    this.setState({ searchedData });

    console.log(e.target.value);
    
  };

  sortByFaculty = async () => {
    let tempData = this.state.data.filter(
      item => item.faculty == this.state.activeFaculty
    );

    let uniqType = Array.from(
      new Set(this.state.data.map(e => e.faculty))
    ).filter(e => e);

    this.setState({
      filteredData: tempData,
      searchedData: tempData,
      facultyNames: uniqType
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
    let someData = [
      {
        id: 1,
        title: "Make crowdfunding for startup",
        description: "Lorem Ipsum Something to change and copy",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ultrices gravida dictum fusce ut placerat. Morbi quis commodo odio aenean sed adipiscing. Eget nunc scelerisque viverra mauris in aliquam. Mauris a diam maecenas sed. Ac ut consequat semper viverra nam libero justo. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Vel quam elementum pulvinar etiam non quam. Diam maecenas ultricies mi eget mauris pharetra et. Praesent elementum facilisis leo vel fringilla. Ultrices dui sapien eget mi proin sed libero. Iaculis eu non diam phasellus.",
        author: "Ilyas Khetimov",
        avatar: "https://i.pravatar.cc/150",
        published: "23.10.2019",
        image: "https://picsum.photos/id/266/300/150",
        aboutUser: "Web Developer",
        stars: 5,
        comments: 2,
        faculty: "Business School"
      },
      {
        id: 2,
        title: "Write C# program",
        description: "Lorem Ipsum Something to change and copy",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Et odio pellentesque diam volutpat commodo. In nibh mauris cursus mattis. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Ultrices gravida dictum fusce ut placerat. Morbi quis commodo odio aenean sed adipiscing. Eget nunc scelerisque viverra mauris in aliquam. Mauris a diam maecenas sed. Ac ut consequat semper viverra nam libero justo. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Vel quam elementum pulvinar etiam non quam. Diam maecenas ultricies mi eget mauris pharetra et. Praesent elementum facilisis leo vel fringilla. Ultrices dui sapien eget mi proin sed libero. Iaculis eu non diam phasellus.",
        author: "Aselya Kozhakhmet",
        avatar: "https://i.pravatar.cc/300",
        published: "23.10.2019",
        image: "https://picsum.photos/id/576/300/150",
        aboutUser: "Web Developer",
        stars: 5,
        comments: 2,
        faculty: "Business School"
      }
    ];

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
          <Row type="flex" justify="end">
            <Col span={8}>
              <Search
                placeholder="input search text"
                onChange={this.searchPost}
                // onChange={value => this.applyFilters(filter.key, value)}
              />
            </Col>
          </Row>
          <Row>
            {this.state.loading ? (
              <Row className="loadingSpinerContainer" justify="center">
                <Spin />
              </Row>
            ) : (
              <ListPosts posts={this.state.searchedData} />
            )}
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default Posts;
