import { useContext } from "react";
import { NumberContext } from "./App.jsx";

function Calculate() {
  const numberContext = useContext(NumberContext);

  return (
    <>
      <div>Sayı: {numberContext.count}</div>
      <button onClick={() => numberContext.dispatch('increment')}>Arttır</button>
      <button onClick={() => numberContext.dispatch('decrement')}>Azalat</button>
      <button onClick={() => numberContext.dispatch('reset')}>Sıfırla</button>
    </>
  )
}

export default Calculate;
