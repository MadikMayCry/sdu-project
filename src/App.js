import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts";
import Testing from "./components/Testing";
import Users from "./components/Users";
import PageHeader from "./components/PageHeader";

import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import SortingTable from "./components/SortingTable";
import SideBar from "./components/SideBar";

const { SubMenu } = Menu;

const { Content, Footer, Sider } = Layout;

export const User = React.createContext();

class App extends Component {
  state = {
    user: {
      name: "Madiyar"
    }
  };

  render() {
    return (
      <Router>
        <Layout>
          <User.Provider value={this.state}>
            <PageHeader />
          </User.Provider>
          <Content style={{ padding: "0 50px", minHeight: "85vh" }}>
            <Switch>
              <Route exact path="/">
                <Posts />
              </Route>
              <Route path="/Testing">
                <Testing />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/sorting-table">
                <SortingTable />
              </Route>
              <Route path="/sidebar">
                <SideBar />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Madiyar Kuttymbekov
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
