import { Card } from "antd";
interface details{
  url:string;
  name:string;
  price:number;
}
const CardComponent = (props:details) => {
  const { Meta } = Card;

  return (
    <> 
        <Card
          hoverable
          style={{ width: 150 }}
          cover={
            <img
              alt="example"
              src={props.url}
            />
          }
        >
          <Meta title={props.name} description={props.price} />
        </Card>
     
    </>
  );
};

export default CardComponent;
