import { Row, Col } from "antd";
import Categories from "./Categories";
import OrderList from "./OrderList";

const Home = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={15}>
        <header className="App-header">
          <Categories />
        </header>
      </Col>
      <Col className="gutter-row" span={9}>
        <OrderList />
      </Col>
    </Row>
  );
};

export default Home;
