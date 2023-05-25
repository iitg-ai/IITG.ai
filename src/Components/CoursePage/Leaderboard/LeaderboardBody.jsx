import React from "react";
import Papa from "papaparse";
import LeaderboardRow from "./LeaderboardRow.jsx";
// import * as fs from "node:fs/promises";
const fs = require("fs");

const LeaderboardBody = () => {

  return (
    <div>
      <LeaderboardRow />
    </div>
  );
};

export default LeaderboardBody;
