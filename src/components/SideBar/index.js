import React, { useState, useEffect } from "react";
import MenuList from "./data.json";
import "./style.css";

function SideBar() {
  const [bread, setBread] = useState(["Home"]);
  const [openKeys, setOpenKeys] = useState([]);

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
          <li
            role="menuitem"
            key={item.key}
            onClick={() => {
              isLi(MenuList, item.key, item.title, []);
            }}
          >
            {item.title}
          </li>
        );
      }
      return (
        <>
          <li
            role="menuitem"
            key={item.key}
            onClick={() => {
              isLi(MenuList, item.key, item.title, []);
              setOpenKeys({ [item.key]: !openKeys[item.key] });
            }}
          >
            {item.title}
          </li>
          <ul className={openKeys[item.key] ? "open" : "collapsed"}>
            {RenderSidebar(item.children)}
          </ul>
        </>
      );
    });
  return (
    <>
      <ul>{MenuList && RenderSidebar(MenuList)}</ul>
      <div className="breadcrumb-wrapper">
        {bread.map(item => (
          <div>{item}</div>
        ))}
      </div>
    </>
  );
}

export default SideBar;
