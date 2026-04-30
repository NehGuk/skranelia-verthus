import { useParams, Link } from "react-router-dom"
import { menu } from "../../data/menu"

function Dish() {
  const { id } = useParams()
  const dish = menu.find((item) => item.id === Number(id))

  if (!dish)
    return (
      <section>
        <h1>Oops...</h1>
        <p>Error message here</p>
        <Link to="/">Tilbake til menyen</Link>
      </section>
    )

  return (
    <>
      <h1>{dish.title}</h1>
      <p>Ingredients</p>
      <p>Category</p>
      <p>Price</p>
    </>
  )
}

export default Dish
