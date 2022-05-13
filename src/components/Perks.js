import OnePerk from "./OnePerk";
function Perks({ upgradesInfo }) {
  const perks = upgradesInfo
    .filter((onePerk) => onePerk.used)
    .map((onePerk) => <OnePerk onePerk={onePerk} />);
  return (
    <div className="perks">
      <h3>My Portfolio</h3>
      {perks}
    </div>
  );
}

export default Perks;
