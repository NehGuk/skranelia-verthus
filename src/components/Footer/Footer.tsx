import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <article className={styles["address"]}>
        <h3>Skranelia 26 B</h3>
        <p>5252</p>
        <p>Søreidgrend</p>
      </article>
    </footer>
  )
}

export default Footer
