import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Input } from "antd";
import {FileOutlined} from "@ant-design/icons";
import EditableTable from "./Components/Table"

function App() {
  const { Header, Content, Footer, Sider } = Layout;
  const { Search } = Input;
  const { SubMenu } = Menu;

  return (
    <div>
      <Header style={{backgroundColor:"#001529"}}>
        {/* <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        /> */}
        {/* <img src="https://dhealth.network/wp-content/uploads/2021/08/dHealth-Network-Logo-blue.png" style={{width:"100px",height:"auto",color:"black"}} alt="/"></img> */}
      </Header>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
            <FileOutlined />
              <span>File</span>
            </Menu.Item>
            <Menu.Item key="2">
            <FileOutlined />
              <span>File</span>
            </Menu.Item>
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  <FileOutlined />
                  <span>File</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu> */}
            {/* <SubMenu
              key="sub2"
              title={
                <span>
                  <FileOutlined />
                  <span>File</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu> */}
            <Menu.Item key="9">
              <FileOutlined />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <h1>All Files</h1>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <EditableTable></EditableTable>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
