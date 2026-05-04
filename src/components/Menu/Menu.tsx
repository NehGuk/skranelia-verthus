import styles from "./Menu.module.css"
import Dish from "../Dish/Dish"
import type { MenuItem } from "../../data/menu"

type Props = {
  menu: MenuItem[]
}

function Menu({ menu }: Props) {
  const starters = menu.filter((item) => {
    return item.category === "Forrett"
  })
  const mainCourses = menu.filter((item) => {
    return item.category === "Hovedrett"
  })
  const desserts = menu.filter((item) => {
    return item.category === "Dessert"
  })

  return (
    <section className={styles["menu"]}>
      <h2>Meny</h2>
      <ul className={styles["starters"]}>
        <h3>Forrett</h3>
        {starters.map((dish) => {
          return (
            <li key={dish.id}>
              <Dish title={dish.title} ingredients={dish.ingredients} category={dish.category} price={dish.price} />
            </li>
          )
        })}
      </ul>
      <ul className={styles["main-courses"]}>
        <h3>Hovedrett</h3>
        {mainCourses.map((dish) => {
          return (
            <li key={dish.id}>
              <Dish title={dish.title} ingredients={dish.ingredients} category={dish.category} price={dish.price} />
            </li>
          )
        })}
      </ul>
      <ul className={styles["desserts"]}>
        <h3>Dessert</h3>
        {desserts.map((dish) => {
          return (
            <li key={dish.id}>
              <Dish title={dish.title} ingredients={dish.ingredients} category={dish.category} price={dish.price} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Menu
