import { useEffect, useState } from "react";

function NumberList({getItems}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(2));
    console.log('updating Items');
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>)
}

export default NumberList;
