import { Tabs } from "antd";
import FoodItems from "./FoodItems";
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

const Categories = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div>
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          items={[
            {
              label: (
                <span>
                  <AndroidOutlined />
                  All
                </span>
              ),
              key: "1",
              children: <FoodItems/>,
            },
            {
              label: `Food`,
              key: "2",
              children: <FoodItems/>,
            },
            {
              label: `Snack`,
              key: "3",
              children: `Content of Tab Pane 3`,
            },
            {
              label: `Ice Cream`,
              key: "4",
              children: `Content of Tab Pane 3`,
            },
            {
              label: `Sweets`,
              key: "5",
              children: `Content of Tab Pane 3`,
            }
          ]}
        />
    </div>
  );
};

export default Categories;
