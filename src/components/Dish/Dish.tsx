type Props = {
  title: string
  ingredients: string
  price: string
}

function Dish({ title, ingredients, price }: Props) {
  return (
    <>
      <h4>{title}</h4>
      <p>{ingredients}</p>
      <p>{price}</p>
    </>
  )
}

export default Dish
