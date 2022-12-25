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
