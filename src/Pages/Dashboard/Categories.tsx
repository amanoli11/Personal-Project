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
                <div className="iconSection">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="All"
                    className="iconStyle"
                  />
                </div>
                <div className="CategoryStyle">All</div>
              </span>
            ),
            key: "1",
            children: <FoodItems />,
          },
          {
            label: (
              <span>
                <div className="iconSection">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="All"
                    className="iconStyle"
                  />
                </div>
                <div className="CategoryStyle">Food</div>
              </span>
            ),
            key: "2",
            children: <FoodItems />,
          },
          {
            label: (
              <span>
                <div className="iconSection">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="All"
                    className="iconStyle"
                  />
                </div>
                <div className="CategoryStyle">Snack</div>
              </span>
            ),
            key: "3",
            children: `Content of Tab Pane 3`,
          },
          {
            label: (
              <span>
                <div className="iconSection">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="All"
                    className="iconStyle"
                  />
                </div>
                <div className="CategoryStyle">Ice Cream</div>
              </span>
            ),
            key: "4",
            children: `Content of Tab Pane 3`,
          },
          {
            label: (
              <span>
                <div className="iconSection">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="All"
                    className="iconStyle"
                  />
                </div>
                <div className="CategoryStyle">Sweets</div>
              </span>
            ),
            key: "5",
            children: `Content of Tab Pane 3`,
          },
          {
            label: (
              <span>
                <div className="iconSection">
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="All"
                    className="iconStyle"
                  />
                </div>
                <div className="CategoryStyle">Drinks</div>
              </span>
            ),
            key: "6",
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </div>
  );
};

export default Categories;
