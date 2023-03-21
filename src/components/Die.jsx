import "./Die.css";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  function DieFace() {}

  return (
    <div style={styles} className="die first-face" onClick={props.holdDice}>
      {/* {props.value} */}
      <span className="dot"> </span>
    </div>
  );
}

export default Die;
