import { useState } from "react";
import { useEffect } from "react";
function Number({ money }) {
  return (
    <span id="haha" className={numberClass}>
      {money}
    </span>
  );
}
export default Number;
