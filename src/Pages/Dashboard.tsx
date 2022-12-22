import CardComponent from "../components/CardComponent";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

const Dashboard = () => {
  return (
    <>
      <div>
        <h1>Choose fucking category</h1>
        <Tabs
          defaultActiveKey="2"
          items={[AppleOutlined, AndroidOutlined].map((Icon, i) => {
            const id = String(i + 1);

            return {
              label: (
                <span>
                  <Icon />
                  FOOD {id}
                </span>
              ),
              key: id,
              children: `Tab ${id}`,
            };
          })}
        />
      </div>
    </>
  );
};

export default Dashboard;
