import { useState } from 'react'
import './App.css'
import PersonelInfo from "./PersonelInfo.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <PersonelInfo/>
    </div>
  )
}

export default App
