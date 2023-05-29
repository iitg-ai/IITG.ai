import React from "react";
import LeaderboardRow from "./LeaderboardRow.jsx";

const LeaderboardBody = (props) => {
  console.log(props.data);
  const rows = props.data.map((object, index) => {
    const score = object.Score.split(" / ")[0];

    return (
      <LeaderboardRow
        key={index + 1}
        index={index + 1}
        uniqueID={object.UniqueID}
        name={object.Name}
        w1={score}
      />
    );
  });

  return <div>{rows}</div>;
};

export default LeaderboardBody;
