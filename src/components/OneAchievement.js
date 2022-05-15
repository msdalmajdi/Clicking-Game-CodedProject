import { useState } from "react";
function OneAchievement({ oneAchievement }) {
  const [situation, setSituation] = useState(0);

  const achieving = () => {
    oneAchievement.achieved = true;
    setSituation(1);
  };

  if (situation === 1) {
    return <></>;
  } else {
    return (
      <div className="btn-achievment" onClick={() => achieving()}>
        {oneAchievement.description}
      </div>
    );
  }
}
export default OneAchievement;
