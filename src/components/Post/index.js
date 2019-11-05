import React, { Component } from "react";

import { Avatar, List, Icon } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      stars,
      comments,
      author,
      image,
      href,
      avatar,
      description,
      content
    } = this.props.post;
    return (
      <List.Item
        key={title}
        actions={[
          <IconText type="star-o" text={stars} key="list-vertical-star-o" />,
          <IconText
            type="message"
            text={comments}
            key="list-vertical-message"
          />,
          <IconText type="user" text={author} key="list-vertical-message" />
        ]}
        extra={<img width={272} alt="logo" src={image} />}
      >
        <List.Item.Meta
          avatar={<Avatar src={avatar} />}
          title={<a href={href}>{title}</a>}
          description={description}
        />
        <div className="post-content">{content}</div>
      </List.Item>
    );
  }
}

export default Post;
