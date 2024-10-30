import './App.css'
import { Navbar } from "./components/Navbar.jsx";
import { CourseList } from "./components/CourseList.jsx";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./control/cartSlice.jsx";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal(cartItems));
  }, [cartItems]);

  return (
    <div className="App">
      <Navbar/>
      <CourseList/>
    </div>
  )
}

export default App
