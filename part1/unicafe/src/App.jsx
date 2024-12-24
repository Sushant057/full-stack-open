import { useState } from "react";

const Header = () => {
  return <h1>give feedback</h1>;
};
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ statistic, text }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{statistic}</td>
        </tr>
      </tbody>
    </table>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + " %";
  return (
    <>
      <h1>statistics</h1>

      <StatisticLine statistic={good} text="good" />
      <StatisticLine statistic={neutral} text="neutral" />
      <StatisticLine statistic={bad} text="bad" />
      <StatisticLine statistic={all} text="all" />
      <StatisticLine statistic={average} text="average" />
      <StatisticLine statistic={positive} text="positive" />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <Header />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
