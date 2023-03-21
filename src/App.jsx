import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rolls, setRolls] = useState(0);
  const [time, setTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  useEffect(() => {
    let intervalId;

    if (!tenzies) {
      intervalId = setInterval(() => {
        if (time.seconds === 59) {
          setTime((prevTime) => ({
            minutes: prevTime.minutes + 1,
            seconds: 0,
          }));
        } else {
          setTime((prevTime) => ({
            ...prevTime,
            seconds: prevTime.seconds + 1,
          }));
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [time.seconds, tenzies]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setRolls(rolls + 1);
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setRolls(0);
      setTime({ minutes: 0, seconds: 0 });
    }
  }

  const diceElements = dice.map((item) => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      holdDice={() => holdDice(item.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="text">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="scoreboard">
        <p>
          Roll count: <span>{rolls}</span>
        </p>
        <p className="timer">
          Timer:
          <span>
            {" "}
            {`${time.minutes.toString().padStart(2, "0")}:${time.seconds
              .toString()
              .padStart(2, "0")}`}
          </span>
        </p>
      </div>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
