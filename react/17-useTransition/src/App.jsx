import { useState, useTransition } from 'react'
import './App.css'

function App() {
  const [input,setInput] = useState('');
  const [myList, setMyList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      const myArray = [];
      for (let i = 0; i < 19999; i++) {
        myArray.push(e.target.value);
      }
      setMyList(myArray);
    })
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleChange} />
      {isPending && 'Yükleniyor....'}
      {
        myList.map((item, index) => <div key={index}>{item}</div>)
      }
    </div>
  )
}

export default App
