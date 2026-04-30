import "./Menu.css"
import { Link } from "react-router-dom"
import type { MenuItem } from "../../data/menu"

type Props = {
  menu: MenuItem[]
}

function Menu({ menu }: Props) {
  return (
    <section className="menu">
      <h2>Vårmeny</h2>
      <ul>
        {menu.map((dish) => {
          return (
            <li key={dish.id}>
              <Link to={`/dish/${dish.id}`}>{dish.title}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Menu
