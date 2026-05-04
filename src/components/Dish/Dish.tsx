import styles from "./Dish.module.css"

type Props = {
  title: string
  ingredients: string
  price: string
}

function Dish({ title, ingredients, price }: Props) {
  return (
    <>
      <h4 className={styles["dish-title"]}>{title}</h4>
      <p className={styles["dish-ingredients"]}>{ingredients}</p>
      <p className={styles["dish-price"]}>{price}</p>
    </>
  )
}

export default Dish
