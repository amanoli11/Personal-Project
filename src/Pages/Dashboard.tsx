import CardComponent from "../components/CardComponent";

const Dashboard = () => {
  return (
    <>
      <div>
        <h1>Choose fucking category</h1>
      </div>
      <div>
        <h1>Food (44) items</h1>
        <CardComponent url="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" name="food" price={25}/>
      </div>
    </>
  );
};

export default Dashboard;
