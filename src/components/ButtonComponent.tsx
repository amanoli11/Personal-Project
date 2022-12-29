import React from "react";
import { Button,Space } from "antd";

export default function ButtonComponent() {
  return (
    <div>
      <Space direction="vertical" style={{ width: "60%" }}>
        <Button
          type="primary"
          block
          size="middle"
          className="OptionButtonStyle"
        >
          Primary
        </Button>
      </Space>
    </div>
  );
}
