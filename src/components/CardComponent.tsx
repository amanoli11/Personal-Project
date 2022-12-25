import { Card, Image } from "antd";
import { useState } from "react";
interface details {
  url: string;
  name: string;
  price: number;
}
const CardComponent = (props: details) => {
  const { Meta } = Card;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Card
        hoverable
        style={{ width: 150 }}
        cover={
          <Image
            preview={{ visible: false }}
            width={200}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            onClick={() => setVisible(true)}
          />
        }
      >
        <Meta title={props.name} description={props.price} />
      </Card>

      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default CardComponent;
