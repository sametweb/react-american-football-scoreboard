//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Scoreboard from "./Scoreboard";
import ControlButtons from "./ControlButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);

  const changeScore = (team, amount) =>
    team === "home"
      ? setHomeScore(homeScore + amount)
      : team === "away"
      ? setAwayScore(awayScore + amount)
      : null;

  return (
    <div className="container">
      <section className="scoreboard">
        <Scoreboard home={homeScore} away={awayScore} />
        <BottomRow />
      </section>
      <ControlButtons
        homeTouchdown={() => changeScore("home", 7)}
        homeFieldgoal={() => changeScore("home", 3)}
        awayTouchdown={() => changeScore("away", 7)}
        awayFieldgoal={() => changeScore("away", 3)}
      />
      <label>
        Home Score:
        <input
          type="number"
          onChange={event => setHomeScore(parseInt(event.target.value))}
          value={homeScore}
        ></input>
      </label>
      <label>
        Away Score:
        <input
          type="number"
          onChange={event => setAwayScore(parseInt(event.target.value))}
          value={awayScore}
        ></input>
      </label>
    </div>
  );
}

export default App;
