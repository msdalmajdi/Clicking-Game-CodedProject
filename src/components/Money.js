import Number from "./Number";
function Money({ money }) {
  return (
    <div className="money">
      $<Number money={money} />
    </div>
  );
}
export default Money;
