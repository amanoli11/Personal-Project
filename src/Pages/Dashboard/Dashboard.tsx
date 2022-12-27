import {Col, Row, Tabs } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Categories from "./Categories";
import OrderList from "./OrderList";

const Dashboard = () => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={15} >
            <header className="App-header">
              <Categories />
            </header>
          </Col>
          <Col className="gutter-row" span={9}>
            <OrderList />
          </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
