import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import React, { useState } from "react";
import theme from "../res/theme";
import "../styles/cartCard.css"

export default function CartCardComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card-section">
      <Row>
        <Col className="gutter-row" span={6}>
          {/* <Image
            preview={{ visible: false }}
            width={70}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            onClick={() => setVisible(true)}
          /> */}
        </Col>
        <Col
          className="gutter-row"
          span={14}
          //   style={{ backgroundColor: "green" }}
        >
          <div style={{textAlign:'start',margin:'0.5rem'}}>
            <p style={{fontSize:theme.fonts.xlarge}}>Zinger Box</p>
            <h2>5.095$</h2>
          </div>
        </Col>
        <Col
          className="gutter-row"
          span={4}
          // style={{ backgroundColor: "blue" }}
        >
          <div>
          <PlusOutlined className="icon-style" />
          </div>
          <div>
            <h3 style={{marginLeft:'40%',marginTop:'4%'}}>2</h3>
          </div>
          <div>
          <MinusOutlined  className="icon-style"/>
          </div>
        </Col>
      </Row>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
        </Image.PreviewGroup>
      </div>
    </div>
  );
}
