function Button({ investing }) {
  return (
    <div className="button">
      <button className="btnInvest" onClick={investing}>
        Sell
      </button>
    </div>
  );
}
export default Button;
