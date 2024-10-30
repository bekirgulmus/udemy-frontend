import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  // const [renderCount, setRenderCount] = useState(0)
  const renderCount = useRef(0);
  const inputRef = useRef('');

  const focusInput = () => {
    inputRef.current.value = 'Can';
    inputRef.current.focus();
  }

  // {current: 0 }
  //
  // useEffect(() => {
  //   setRenderCount((prevState) => prevState + 1 );
  // }, );

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>benim adım {name}</div>
      <div>{renderCount.current} defa render oldu</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default App
