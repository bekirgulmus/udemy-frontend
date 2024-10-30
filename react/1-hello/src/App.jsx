import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <div style={{
          width: '250px',
          height: '250px',
          backgroundColor: 'blueviolet',
          fontSize: '30px',
        }}/>
      </div>
    </>
  )
}

export default App
