import React from "react";
import { Menu } from "antd";

let { Item } = Menu;

const CustomMenuItem = props => {
  // console.log(props.children);

  let { item, key } = props;
  return (
    <Item
      key={key}
      onClick={e => {
        // props.setBread([e.item.props.openKeys]);
        console.log(e);
      }}
    >
      {props.children}
    </Item>
  );
};

export default CustomMenuItem;
