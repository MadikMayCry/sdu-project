import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import HooksAPI from "./HooksAPI";
import RenderProps from "./RenderProps";
import { FilterableProductTable } from "./Philosophy";

const PRODUCTSLIST = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export const ProductAPI = React.createContext([]);

export default class About extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <Layout style={{ padding: "15px", background: "" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <ProductAPI.Provider value={PRODUCTSLIST}>
            <FilterableProductTable />
          </ProductAPI.Provider>
          <RenderProps />
          {/* <HooksAPI /> */}
        </div>
      </Layout>
    );
  }
}
