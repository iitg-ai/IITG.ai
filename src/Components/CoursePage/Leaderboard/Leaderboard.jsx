import React, { useEffect, useState } from "react";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardBody from "./LeaderboardBody";
import Papa from "papaparse";
import importedNewFile from "../../../Constants/ML.AI week1 result.csv";

const Leaderboard = () => {
  const [result, setResult] = useState({
    data: [{ Name: "John Doe", UniqueID: 2342, Score: "24" }],
  });

  useEffect(() => {
    const handleParse = () => {
      Papa.parse(importedNewFile, {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function (results, file) {
          setResult(results);
        },
      });
    };
    handleParse();
  }, []);

  return (
    <div className="grid grid-cols-1 max-lg:hidden">
      <div>
        <LeaderboardHeader />
      </div>
      <div>
        <LeaderboardBody data={result.data} />
      </div>
    </div>
  );
};

export default Leaderboard;
