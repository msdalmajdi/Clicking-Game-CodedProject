import { useState } from "react";
import { useEffect } from "react";
function Number({ money }) {
  const [numberClass, setNumberClass] = useState("money-amount-trans");
  useEffect(() => {
    const id = setInterval(() => console.log("haha"), 99999);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <span id="haha" className={numberClass}>
      {money}
    </span>
  );
}
export default Number;
