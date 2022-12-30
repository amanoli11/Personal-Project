import React from "react";
import { Button,Space } from "antd";
import "../styles/buttonComponent.css"
export default function ButtonComponent(props:
  { name: string }
) {
  return (
    <div>
      <Space direction="vertical" style={{ width: "80%" }}>
        <Button
          type="default"
          block
          size="middle"
          className="OptionButtonStyle"
        >
          {props.name}
        </Button>
      </Space>
    </div>
  );
}
