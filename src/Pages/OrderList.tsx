import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Row,Space } from "antd";
import React from "react";
import "../styles/orderList.css";

export default function OrderList() {
  return (
    <div>
      <div className="orderHeader">
        <Row>
          <Col className="gutter-row" span={14}>
            <div className="title">
              <h1>OrderList</h1>
              <p>Transaction #00391</p>
            </div>
          </Col>
          <Col className="gutter-row" span={10}>
            <div className="icons">
              <div className="iconBox">
                <Button block>
                  <DeleteOutlined style={{ fontSize: "20px", color: "#08c" }} />
                </Button>
              </div>
              <div className="iconBox">
                <Button block>
                  <DeleteOutlined style={{ fontSize: "20px", color: "#08c" }} />
                </Button>
              </div>
              <div className="iconBox">
                <Button block>
                  <DeleteOutlined style={{ fontSize: "20px", color: "#08c" }} />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="optionsSection">
        <Row>
          <Col className="gutter-row" span={8}>
          <Space direction="vertical" style={{ width: '60%' }}>
            <Button type="primary" block size="middle" className="OptionButtonStyle">
              Primary
            </Button>
            </Space>
          </Col>
          <Col className="gutter-row" span={8}>
          <Space direction="vertical" style={{ width: '60%' }}>
            <Button type="primary" block size="middle" className="OptionButtonStyle">
              Primary
            </Button>
            </Space>
          </Col>
          <Col className="gutter-row" span={8}>
          <Space direction="vertical" style={{ width: '60%' }}>
            <Button type="primary" block size="middle" className="OptionButtonStyle">
              Primary
            </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
}
