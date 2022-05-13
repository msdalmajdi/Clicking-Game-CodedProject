import "./App.css";
import Header from "./components/Header";
import Money from "./components/Money";
import Button from "./components/Button";
import Upgrades from "./components/Upgrades";
import Perks from "./components/Perks";
import { useState } from "react";
import upgradesInfo from "./data/upgradesInfo";
function App() {
  const [money, setMoney] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const investing = () => {
    let newMoney = money + multiplier;
    setMoney(newMoney);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Upgrades
          upgradesInfo={upgradesInfo}
          multiplier={multiplier}
          setMultiplier={setMultiplier}
          money={money}
          setMoney={setMoney}
        />
        <div className="money-and-btn">
          <Money money={money} />
          <Button investing={investing} />
          <div>Money Per Click {multiplier}</div>
        </div>
        <Perks upgradesInfo={upgradesInfo} />
      </div>
    </div>
  );
}

export default App;
