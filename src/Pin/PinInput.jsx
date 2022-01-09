import { useRef, useState } from "react";
import PinItem from "./PinItem";

function PinInput({ noOfBoxes = 4, length = 1, onChange }) {
  const [values, setValues] = useState(() => new Array(noOfBoxes).fill(""));

  const arr = new Array(noOfBoxes).fill(0);

  const ref = useRef([]);

  const handleChange = (val, index) => {
    // set the value[index] to new value
    values[index] = val;
    setValues([...values]);

    //move to next input box
    if (val.length === length && index < noOfBoxes - 1) {
      ref.current[index + 1].focus();
    }
  };

  const handleBackSpace = (val, index) => {
    let temp = values[index];
  };

  const handlePaste = () => {};

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {arr.map((_, i) => (
        <PinItem
          key={i}
          ref={(el) => {
            ref.current[i] = el;
          }}
          handleChange={(v) => handleChange(v, i)}
          length={length}
        />
      ))}
    </div>
  );
}

export default PinInput;
