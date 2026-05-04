type Props = {
  title: string
  ingredients: string
  category: string
  price: string
}

function Dish({ title, ingredients, category, price }: Props) {
  return (
    <>
      <h4>{title}</h4>
      <p>{ingredients}</p>
      <p>{price}</p>
    </>
  )
}

export default Dish
