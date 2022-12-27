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
        style={{ width: 200 }}
        cover={
          <Image
            preview={{ visible: false }}
            width={200}
            height={200}
            src="https://chickenstock.net/wp-content/uploads/2022/02/Mighty-Zinger-2.jpg"
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
          <Image src="https://chickenstock.net/wp-content/uploads/2022/02/Mighty-Zinger-2.jpg" />
          <Image src="https://chickenstock.net/wp-content/uploads/2022/02/Mighty-Zinger-Combo-Meal-3.jpg" />
          <Image src="https://chickenstock.net/wp-content/uploads/2022/02/Mighty-Zinger-Box-3.jpg" />
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default CardComponent;
