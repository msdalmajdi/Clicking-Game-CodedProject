function OnePerk({ onePerk }) {
  if (onePerk.passive === 0) {
    return (
      <button className="btnPerk" disabled>
        Selling {onePerk.name}
      </button>
    );
  } else {
    return (
      <button className="btnPerk" disabled>
        Employing {onePerk.name}
      </button>
    );
  }
}

export default OnePerk;
