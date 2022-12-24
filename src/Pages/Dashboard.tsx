import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import Categories from "./Categories";
import OrderList from "./OrderList";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Content>
          <div>
            <h1>Choose fucking category</h1>
            <header className="App-header">
              <Categories />
            </header>
          </div>
        </Content>
        <Sider>
          <div>
            <OrderList />
          </div>
        </Sider>
      </Layout>
    </div>
  );
};

export default Dashboard;
