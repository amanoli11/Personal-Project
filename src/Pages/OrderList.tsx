import {
  DeleteOutlined,
  DollarOutlined,
  MoreOutlined,
  PercentageOutlined,
  PrinterOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import CartCardComponent from "../components/CartCardComponent";
import "../styles/orderList.css";
import theme from "../res/theme";

export default function OrderList() {
  return (
    <div className="orderSection">
      <div className="orderHeader">
        <Row>
          <Col className="gutter-row" span={16}>
            <div className="title">
              <h1 style={{ color: theme.colors.black }}>Order List</h1>
              {/* <p style={[styles.regularText, { color: theme.colors.gray }]}>Transaction #00391</p> */}
              <p style={{ color: theme.colors.gray }}>Transaction #00391</p>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="icons">
              <Row>
                <Col className="gutter-row" span={9}>
                  <div className="iconBox">
                    <Button block size="small">
                      <PercentageOutlined
                        style={{
                          fontSize: "1.3rem",
                          color: theme.colors.black,
                        }}
                      />
                    </Button>
                  </div>
                </Col>
                <Col className="gutter-row" span={9}>
                  <div className="iconBox">
                    <Button block size="small">
                      <DeleteOutlined
                        style={{
                          fontSize: "1.3rem",
                          color: theme.colors.lightRed,
                        }}
                      />
                    </Button>
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="iconBox">
                    <MoreOutlined
                      style={{ fontSize: "1.3rem", color: "black" }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <div className="optionsSection" style={{ alignItems: "center" }}>
        <Row>
          <Col className="gutter-row" span={8}>
            <ButtonComponent name="Add Client" />
          </Col>
          <Col className="gutter-row" span={8}>
            <ButtonComponent name="Eat In" />
          </Col>
          <Col className="gutter-row" span={8}>
            <ButtonComponent name="Delivery" />
          </Col>
        </Row>
      </div>

      <div className="cartCard">
        <CartCardComponent />
        <CartCardComponent />
        <CartCardComponent />
      </div>

      <div className="sticky-section">
        <div className="totalPriceSection">
          <Row>
            <Col className="gutter-row" span={18}>
              <div className="titleBox">
                <h4 style={{ marginTop: "0.5rem" }}>Sub Total</h4>
                <h4 style={{ marginTop: "0.5rem" }}>Tax</h4>
                <h4 style={{ marginTop: "0.5rem" }}>Total</h4>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div>
                <h4 style={{ marginTop: "0.5rem" }}>$500</h4>
                <h4 style={{ marginTop: "0.5rem" }}>$20</h4>
                <h4 style={{ marginTop: "0.5rem" }}>$520</h4>
              </div>
            </Col>
          </Row>
        </div>
        <div className="paymentSection">
          <h3>Payment Method</h3>
          <Row className="paymentBox">
            <Col className="gutter-row" span={6}>
            <div className="parent-box">
                <div className="iconBox">
                  <DollarOutlined style={{ fontSize: "25px", color: "#08c" }} />
                  <h5>Cash</h5>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div className="parent-box">
                <div className="iconBox">
                  <DollarOutlined style={{ fontSize: "25px", color: "#08c" }} />
                  <h5>Cash</h5>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div className="parent-box">
                <div className="iconBox">
                  <DollarOutlined style={{ fontSize: "25px", color: "#08c" }} />
                  <h5>Cash</h5>
                </div>
              </div>
            </Col>
            <Col
              className="gutter-row"
              span={6}
              // style={{ backgroundColor: "black" }}
            >
              <div className="parent-box">
                <div className="iconBox">
                  <DollarOutlined style={{ fontSize: "25px", color: "#08c" }} />
                  <h5>Cash</h5>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottomSection">
          <Row>
            <Col className="gutter-row" span={6}>
            <div className="parent-bottom" style={{backgroundColor:"#c7d6cb"}}>
                <div className="iconBox">
                  <PrinterOutlined style={{ fontSize: "26px", color: "white",margin:"0.2rem" }} />
                  <h4>Print</h4>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={18}>
            <div className="parent-bottom" style={{backgroundColor:"#26729e"}}>
                <div className="iconBox">
                  <h3 style={{color:'white'}}>Pay Rs 1000</h3>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
