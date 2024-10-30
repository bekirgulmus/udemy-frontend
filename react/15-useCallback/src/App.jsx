import './App.css'
import { useState, useCallback } from "react";
import NumberList from "./NumberList.jsx";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  const getItems = useCallback((incerementValue) => {
    return [number, number + 1 + incerementValue, number + 2 + incerementValue];
  },[number]);

  return (
    <div className="App">
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Temayı Değiştir
        </button>
        <NumberList getItems = {getItems}/>
      </div>
    </div>
  )
}


export default App
