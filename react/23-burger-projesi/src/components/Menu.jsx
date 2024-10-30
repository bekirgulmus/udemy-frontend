import { Data } from '../helpers/Data.jsx'
import { MenuItem } from './MenuItem.jsx';
import '../styles/Menu.css'

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {
          Data.map((menuItem, index) => (
            <MenuItem
              key={index}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Menu;
