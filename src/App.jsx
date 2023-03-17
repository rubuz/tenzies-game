import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const number = Math.ceil(Math.random() * 6);
      newDice.push({
        value: number,
        isHeld: true,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function holdDice(id) {
    console.log(id);
  }

  function rollDice() {
    setDice((prevDice) => allNewDice());
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
      <div className="dice-container">{diceElements}</div>
      <button className="roll-btn" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
