import "./App.css";
import Header from "./components/Header";
import Money from "./components/Money";
import Button from "./components/Button";
import Upgrades from "./components/Upgrades";
import Perks from "./components/Perks";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import upgradesInfo from "./data/upgradesInfo";
import achievementsInfo from "./data/achievementsInfo";
import Achievements from "./components/Achievements";
function App() {
  const [money, setMoney] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [income, setIncome] = useState(0);

  //per second
  useEffect(() => {
    const id = setInterval(
      () => setMoney((oldCount) => oldCount + income),
      1000
    );

    return () => {
      clearInterval(id);
    };
  }, [income]);

  //clicky
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
          income={income}
          setIncome={setIncome}
          money={money}
          setMoney={setMoney}
        />
        <div className="money-and-btn">
          <Money money={money} />
          <Button investing={investing} />
          <div>Money Per Click {multiplier}</div>
          <div>Money Per Second {income}</div>
          <Achievements money={money} achievementsInfo={achievementsInfo} />
        </div>
        <Perks upgradesInfo={upgradesInfo} />
      </div>
    </div>
  );
}

export default App;
