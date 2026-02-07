import { useState } from "react";

export default function Player() {
  let [runs, setRuns] = useState(0);
  let [sixes, setSixes] = useState(0);
  let [fours, setFours] = useState(0);

  const counter = (run) => {
    const newRuns = runs + run;
    setRuns(newRuns);
    if (run === 4) {
      const newFours = fours + 1;
      setFours(newFours);
    }
    if (run === 6) {
      const newSix = sixes + 1;
      setSixes(newSix);
    }
  };
  return (
    <>
      <h2>Batsman</h2>
      {
        runs>50 && <p>You have scored 50</p>
      }
      <h3>Runs: {runs}</h3>
      <h3>Fours: {fours}</h3>
      <h3>Sixes: {sixes}</h3>
      <div>
        <button onClick={() => counter(1)}>1</button>
        <button onClick={() => counter(4)}>4</button>
        <button onClick={() => counter(6)}>6</button>
      </div>
    </>
  );
}
