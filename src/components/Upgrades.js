import OneUpgrade from "./OneUpgrade";
function Upgrades({
  upgradesInfo,
  multiplier,
  setMultiplier,
  money,
  setMoney,
}) {
  const upgradeInvest = (power) => {
    let newMultiplier = multiplier * power;
    setMultiplier(newMultiplier);
  };

  const availableUpgrades = upgradesInfo
    .filter((oneUpgrade) => !oneUpgrade.used && oneUpgrade.price <= money)
    .map((oneUpgrade) => (
      <OneUpgrade
        oneUpgrade={oneUpgrade}
        upgradeInvest={upgradeInvest}
        money={money}
        setMoney={setMoney}
      />
    ));
  return (
    <div className="upgrades">
      <h3>Investment Opportunuties</h3>
      {availableUpgrades}
    </div>
  );
}
export default Upgrades;
