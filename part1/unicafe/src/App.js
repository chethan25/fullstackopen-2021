import React, { useState } from 'react';

const StatisticLine = ({ text, value, symbol }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
      <td>{symbol}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = ((good + neutral + bad) / 3).toFixed(1);
  const positive = ((good / all) * 100).toFixed(1);

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} symbol="%" />
      </tbody>
    </table>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
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
        <Button handleClick={handleGoodClick} text="Good" />
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />
      </div>
      <div>
        <h2>Statistics</h2>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </>
  );
};

export default App;
