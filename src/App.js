import React from "react";
import boxes from "./boxes";

export default function App(props) {
  const [boxesElement, setBoxesElement] = React.useState(boxes);
  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  };
  const createBoxes = boxesElement.map((box) => (
    <div style={styles} className="main--boxes" key={box.id}></div>
  ));

  return <main>{createBoxes}</main>;
}
