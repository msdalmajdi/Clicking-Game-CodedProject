import { useState } from "react";
function OneUpgrade({
  oneUpgrade,
  upgradeInvest,
  upgradeIncome,
  money,
  setMoney,
}) {
  const [situation, setSituation] = useState(0);

  const usedUpgrade = () => {
    oneUpgrade.used = true;
    setSituation(1);
  };
  if (situation === 1) {
    return <></>;
  } else {
    return (
      <button
        className="btnUpgrade"
        onClick={() => {
          upgradeInvest(oneUpgrade.power);
          upgradeIncome(oneUpgrade.passive);
          usedUpgrade();
          setMoney(money - oneUpgrade.price);
        }}
      >
        {oneUpgrade.name}
      </button>
    );
  }
}
export default OneUpgrade;
