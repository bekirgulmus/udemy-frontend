import { useMemo, useDeferredValue } from "react";

function Characters({input}) {
  const deferredValue = useDeferredValue(input);

  return useMemo(() => {
    const myArray = [];
    for (let i = 0; i < 20000; i++) {
      myArray.push(<div key={i}>{deferredValue}</div>);
    }
    return myArray;
  }, [deferredValue]);
}

export default Characters;
