import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";

export default function App() {
  const [boxesElement, setBoxesElement] = React.useState(boxes);

  function toggle(id) {
    setBoxesElement((prevBoxes) => {
      return prevBoxes.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  }

  const createBoxes = boxesElement.map((box) => (
    <Box on={box.on} key={box.id} id={box.id} toggle={toggle} />
  ));

  return <main>{createBoxes}</main>;
}
