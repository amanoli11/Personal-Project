import {
  DeleteOutlined,
  MoreOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import CartCardComponent from "../components/CartCardComponent";
import "../styles/orderList.css";
import theme from "../res/theme";

export default function OrderList() {
  return (
    <div>
      <div className="orderHeader">
        <Row>
          <Col className="gutter-row" span={16}>
            <div className="title">
              <h1 style={{color:theme.colors.black}}>Order List</h1>
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
                        style={{ fontSize: "1.3rem", color: theme.colors.black }}
                      />
                    </Button>
                  </div>
                </Col>
                <Col className="gutter-row" span={9}>
                  <div className="iconBox">
                    <Button block size="small">
                      <DeleteOutlined
                        style={{ fontSize: "1.3rem", color: theme.colors.lightRed }}
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
      <div className="optionsSection" style={{alignItems:"center"}}>
        <Row>
          <Col className="gutter-row" span={8} >
            <ButtonComponent name='Add Client'/>
          </Col>
          <Col className="gutter-row" span={8}>
            <ButtonComponent name="Eat In"/>
          </Col>
          <Col className="gutter-row" span={8}>
            <ButtonComponent name="Delivery"/>
          </Col>
        </Row>
      </div>

      <div className="cartCard">
        <CartCardComponent />
        <CartCardComponent />
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
