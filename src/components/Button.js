function Button({ investing }) {
  return (
    <div className="button">
      <button className="btnInvest" onClick={investing}>
        Invest
      </button>
    </div>
  );
}
export default Button;
