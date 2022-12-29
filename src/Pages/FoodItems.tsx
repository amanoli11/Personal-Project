import { Row } from "antd";
import "../styles/foodItems.css";
import CardComponent from "../components/CardComponent";

const FoodItems = () => {
  return (
    <>
      <div>
        <h1>Food (44) items</h1>
        <Row>
          <div className="cardSection">
            <CardComponent 
              url="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              name="Mighty Zinger"
              price={25}
            />
          </div>
          <div className="cardSection">
            <CardComponent
              url="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              name="Mighty Zinger"
              price={25}
            />
          </div>
          <div className="cardSection">
            <CardComponent
              url="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              name="Mighty Zinger"
              price={25}
            />
          </div>
        </Row>
      </div>
    </>
  );
};

export default FoodItems;
