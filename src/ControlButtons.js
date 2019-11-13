import React from "react";

const ControlButtons = ({
  homeTouchdown,
  homeFieldgoal,
  awayTouchdown,
  awayFieldgoal
}) => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={homeTouchdown}>
          Home Touchdown
        </button>
        <button className="homeButtons__fieldGoal" onClick={homeFieldgoal}>
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={awayTouchdown}>
          Away Touchdown
        </button>
        <button className="awayButtons__fieldGoal" onClick={awayFieldgoal}>
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default ControlButtons;
