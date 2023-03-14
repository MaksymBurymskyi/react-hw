import "./App.css";
import Card from "./components/card/card";

function App() {
  return (
    <div className="App">
      <Card
        src="./images/chair.png"
        alt="Dining Chair"
        title="Dining Chair by esteban+moreno"
        description="With a new design approach for flexible use: from a dinner for two to a big celebration."
        price="100"
        oldPrice="120"
        isSale={true}></Card>
      <Card
        src="./images/watches.png"
        alt="Watches"
        title="Underwater wearable watches"
        description="An accessory for any occasion, from a nice dinner to an underwater swim."
        price="90"
        isSale={false}></Card>
      <Card
        src="./images/shoulder_bag.png"
        alt="Shoulder Bag"
        title="Sac Marin Yellow"
        description="Marinetmarine store backpack. The Sac Marin can be worn as a backpack or as a bag over one shoulder."
        price="108"
        isSale={false}></Card>
    </div>
  );
}

export default App;
