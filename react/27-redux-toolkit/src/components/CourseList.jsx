import { useSelector, useDispatch } from "react-redux";
import { CourseItem } from "./CourseItem.jsx";
import { clearCart } from "../control/cartSlice.jsx";

export const CourseList = () => {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  return (
    <>
      { quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
            <h4>bom boş</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map((item) => (
              <CourseItem {...item} key={item.id} />
            ))}
          </div>
          <footer>
            <hr/>
            <div>
              <h4>Toplam Tutar <span>{total} TL</span></h4>
            </div>
            <button className="cartClearButton" onClick={() => dispatch(clearCart())}>Temizle</button>
          </footer>

        </section>
      )}
    </>
  )
}
