import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="navbar">
        <h3>Kurs Uygulaması</h3>

        <div className="navDiv">
          <div className="itemsDiv">
            <p>{quantity}</p>
          </div>
          <BsFillBasketFill className="itemsIcon" />
        </div>
      </div>
    </nav>
  )
}
