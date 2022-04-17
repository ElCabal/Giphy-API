import { useState } from "react";
import SearchBox from "./components/SearchBox";

function App() {
  const [textBox, setTextBox] = useState("HOLA");

  return (
    <div className="App">
      <SearchBox textBox={textBox} setTextBox={setTextBox} />
    </div>
  );
}

export default App;
