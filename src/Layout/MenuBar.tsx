import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const MenuBar = () => {
  const items = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" }, // which is required
    {
      label: "sub menu",
      key: "submenu",
      children: [{ label: "item 3", key: "submenu-item-1" }],
    },
  ];

  const onClick = () => {
    alert("Menu Item Clicked");
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 100 }}
      // defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MenuBar;
