import NumberEasing from "react-number-easing";
function Number({ money }) {
  return (
    <div className="money-amount">
      <NumberEasing value={money} speed={666} decimals={0} ease="quintOut" />
    </div>
  );
}
export default Number;
