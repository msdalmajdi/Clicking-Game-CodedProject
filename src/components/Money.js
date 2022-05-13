function Money({ money }) {
  return (
    <div className="money">
      $<span className="money-amount">{money}</span>
    </div>
  );
}
export default Money;
