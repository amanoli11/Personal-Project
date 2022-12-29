import { DeleteOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import CartCardComponent from "../components/CartCardComponent";
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
            <ButtonComponent />
          </Col>
          <Col className="gutter-row" span={8}>
            <ButtonComponent />
          </Col>
          <Col className="gutter-row" span={8}>
            <ButtonComponent />
          </Col>
        </Row>
      </div>

      <div className="cartCard">
        <CartCardComponent />
      </div>

      <div className="totalPriceSection">
        <div>
          <Row>
            <Col className="gutter-row" span={12}>
              <div>
                <h5>Sub Total</h5>
                <h5>Tax</h5>
                <h4>Total</h4>
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div>
                <h5>$500</h5>
                <h5>$20</h5>
                <h4>$520</h4>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <h3>Payment Method</h3>
          <Row>
            <Col className="gutter-row" span={6}>
              Cash
            </Col>
            <Col className="gutter-row" span={6}>
              Card
            </Col>
            <Col className="gutter-row" span={6}>
              Gift
            </Col>
            <Col className="gutter-row" span={6}>
              Offer
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col className="gutter-row" span={6}>
              Print
            </Col>
            <Col className="gutter-row" span={18}>
              Card
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
