import type { MenuItem } from "../../data/menu"

type Props = {
  menu: MenuItem[]
}

function Menu({ menu }: Props) {
  return (
    <article>
      <h2>Vårmeny</h2>
      <ul>
        {menu.map((dish) => {
          return (
            <li key={dish.id}>
              <a href="#">{dish.title}</a>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default Menu
