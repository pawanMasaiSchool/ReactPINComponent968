import PinInput from "./Pin/PinInput";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Enter PIN</h1>
      <PinInput noOfBoxes={4} length={1} />
    </div>
  );
}
