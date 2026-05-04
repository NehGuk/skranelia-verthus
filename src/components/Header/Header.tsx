import styles from "./Header.module.css"
import logo from "../../assets/logo.png"

function Header() {
  return (
    <header className={styles.header}>
      <article className={styles["logo-container"]}>
        <img src={logo} className={styles["logo-header"]}></img>
      </article>
    </header>
  )
}

export default Header
