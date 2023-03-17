function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div style={styles} className="die">
      {props.value}
    </div>
  );
}

export default Die;
