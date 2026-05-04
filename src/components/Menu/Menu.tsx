import Dish from "../Dish/Dish"

function Menu() {
  return (
    <section className="menu">
      <h2>Vårmeny</h2>

      <ul>
        <li>
          <Dish />
        </li>
        <li>
          <Dish />
        </li>
        <li>
          <Dish />
        </li>
      </ul>
    </section>
  )
}

export default Menu
