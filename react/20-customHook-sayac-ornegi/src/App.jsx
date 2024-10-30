import { useState } from 'react'
import './App.css'
import Sayac from "./Sayac.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sayac/>
    </div>
  )
}

export default App
