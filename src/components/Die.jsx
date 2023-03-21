import "./Die.css";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  const DieFace = () => {
    switch (props.value) {
      case 1:
        return (
          <div
            style={styles}
            className="die first-face"
            onClick={props.holdDice}
          >
            <span className="dot"> </span>
          </div>
        );
      case 2:
        return (
          <div
            style={styles}
            className="die second-face"
            onClick={props.holdDice}
          >
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
      case 3:
        return (
          <div
            style={styles}
            className="die third-face"
            onClick={props.holdDice}
          >
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
      case 4:
        return (
          <div
            style={styles}
            className="die fourth-face"
            onClick={props.holdDice}
          >
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
      case 5:
        return (
          <div
            style={styles}
            className="die fifth-face"
            onClick={props.holdDice}
          >
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
      case 6:
        return (
          <div
            style={styles}
            className="die sixth-face"
            onClick={props.holdDice}
          >
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
    }
  };

  return (
    // <div style={styles} className="die" onClick={props.holdDice}>
    //   {props.value}
    // </div>
    <>{DieFace()}</>
  );
}

export default Die;
