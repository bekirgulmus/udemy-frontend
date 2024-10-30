import { useState } from 'react'
import './App.css'
import Characters from "./Characters.jsx";

function App() {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <input value={input} onChange={handleChange}/>
      <Characters input={input} />
    </div>
  )
}

export default App
