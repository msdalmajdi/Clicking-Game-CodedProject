import OneAchievement from "./OneAchievement";

function Achievements({ money, achievementsInfo }) {
  const achievements = achievementsInfo
    .filter(
      (oneAchievement) => money > oneAchievement.req && !oneAchievement.achieved
    )
    .map((oneAchievment) => (
      <OneAchievement
        oneAchievement={oneAchievment}
        achievementsInfo={achievementsInfo}
      />
    ));
  return <div>{achievements}</div>;
}
export default Achievements;
