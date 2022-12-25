import { AutoComplete, Col, Input, Row, Tabs } from "antd";
import FoodItems from "./FoodItems";
import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import "../../styles/categories.css";

const Categories = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div>
      <div className="headerSection">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <div className="titleSection">
              <div>
                <h1>Choose fucking category</h1>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="searchSection">
             <div>
              <AutoComplete
                popupClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{ width: 250 }}
                // options={options}
              >
                <Input.Search size="large" placeholder="Search" />
              </AutoComplete>
              </div>
            </div>
          </Col>
        </Row>
      </div>
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
            children: <FoodItems />,
          },
          {
            label: `Food`,
            key: "2",
            children: <FoodItems />,
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
          },
        ]}
      />
    </div>
  );
};

export default Categories;
