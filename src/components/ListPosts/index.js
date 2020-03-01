import React, { Component } from "react";
import Post from "./../Post";
import { List } from "antd";

class ListPosts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        dataSource={this.props.posts}
        renderItem={item => <Post post={item}></Post>}
      />
    );
  }
}

export default ListPosts;
