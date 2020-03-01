import React, { useState } from "react";
import MenuList from "./data.json";
import { Menu, Breadcrumb } from "antd";

const { SubMenu } = Menu;

function SideBar() {
  const [bread, setBread] = useState(["Home"]);

  const isLi = (data, key, title, myarr) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].key == key) {
        setBread([bread[0], ...myarr, title]);
        break;
      }
      if (data[i].children) {
        isLi(data[i].children, key, title, [data[i].title]);
      } else {
        setBread([]);
      }
    }
  };

  const RenderSidebar = data =>
    data.map(item => {
      if (!item.children) {
        return (
          <Menu.Item
            key={item.key}
            onClick={() => {
              isLi(MenuList, item.key, item.title, []);
            }}
          >
            {item.title}
          </Menu.Item>
        );
      }
      return (
        <SubMenu
          key={item.key}
          title={item.title}
          onTitleClick={() => {
            isLi(MenuList, item.key, item.title, []);
          }}
        >
          {RenderSidebar(item.children)}
        </SubMenu>
      );
    });
  return (
    <>
      <Menu style={{ width: 256 }} mode="inline">
        {MenuList && RenderSidebar(MenuList)}
      </Menu>
      <Breadcrumb>
        {bread.map(item => (
          <Breadcrumb.Item>{item}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
}

export default SideBar;
