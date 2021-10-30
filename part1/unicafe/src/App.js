import React, { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good + neutral + bad) / 3;
  const positive = (good / all) * 100;

  return (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <div>
        <h2>Give Feedback</h2>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </div>
      <div>
        <h2>Statistics</h2>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </>
  );
};

export default App;
