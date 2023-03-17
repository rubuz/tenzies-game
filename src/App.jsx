import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6);
      newDice.push({
        value: number,
        isHeld: false,
      });
    }
    return newDice;
  }

  function rollDice() {
    setDice((prevDice) => allNewDice());
  }

  const diceElements = dice.map((item) => <Die value={item.value} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
