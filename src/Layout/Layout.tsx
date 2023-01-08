import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Typography,
  Avatar,
  Col,
  Row,
  Space,
  Button,
} from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import "./layout.css";

const { Header, Content, Sider, Footer } = Layout;

const ApplicationLayout = (props: { children?: JSX.Element | null }) => {
  // const items = [
  //   { label: "item 1", key: "item-1", title: "demo" }, // remember to pass the key prop
  //   { label: "item 2", key: "item-2" }, // which is required
  //   {
  //     label: "sub menu",
  //     key: "submenu",
  //     children: [{ label: "item 3", key: "submenu-item-1" }],
  //   },
  // ];

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <div
      style={{
        background: "#303136",
        // position: "absolute",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      }}
    >
      <div style={{ position: "inherit", marginLeft: "3%", marginTop: "0%" }}>
        <Avatar size="large" icon={<UserOutlined />} />
        <br />
        <br />
        <hr color="inherit" />
      </div>

      <div className="menuItems">
        <ul>
          <li>
            <HomeOutlined />
          </li>
          <li>
            <HomeOutlined />
          </li>
          <li>
            <HomeOutlined />
          </li>
        </ul>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "98%",
          // marginTop: "0.5%",
          marginRight: "0.5%",
          marginLeft: "7.5%",
          borderRadius: "20px",
        }}
      >
        <div className="children">{props.children}</div>
      </div>
    </div>
    // <Layout style={{ height: "100vh" }}>
    //   <Sider
    //     style={{ borderRightWidth: "thin" }}
    //     theme="dark"
    //     breakpoint="lg"
    //     collapsedWidth="0"
    //     onBreakpoint={(broken) => {
    //       console.log(broken);
    //     }}
    //     onCollapse={(collapsed, type) => {
    //       console.log(collapsed, type);
    //     }}
    //   >
    //     <div
    //       style={{
    //         height: "32px",
    //         margin: "16px",
    //         background: "gray",
    //         color: "white",
    //         textAlign: "center",
    //       }}
    //     ></div>

    //     <Menu theme="dark" mode="inline" items={items} />
    //   </Sider>
    //   <Layout>
    //     <Header
    //       style={{
    //         padding: 0,
    //         background: colorBgContainer,
    //       }}
    //     >
    //       <Row align={"middle"}>
    //         <Col xl={23}>
    //           <Typography.Title style={{ padding: 5 }}>AMS</Typography.Title>
    //         </Col>
    //         <Col xl={1}>
    //           <Avatar
    //             style={{ backgroundColor: "#87d068" }}
    //             icon={<UserOutlined />}
    //           />
    //         </Col>
    //       </Row>
    //     </Header>
    //     <Content style={{ margin: "0 16px" }}>
    //       <Breadcrumb style={{ margin: "12px 0" }}>
    //         <Breadcrumb.Item>Home</Breadcrumb.Item>
    //         <Breadcrumb.Item>List</Breadcrumb.Item>
    //         <Breadcrumb.Item>App</Breadcrumb.Item>
    //       </Breadcrumb>
    //       <div style={{ background: "#fff", padding: 24, height: "85vh" }}>
    //         {props.children}
    //       </div>
    //     </Content>
    //     {/* <Footer style={{ textAlign: "center", maxHeight: "2vh" }}>
    //       AMS ©2022 Created by Aman
    //     </Footer> */}
    //   </Layout>
    // </Layout>
  );
};

export default ApplicationLayout;
