import styles from "./Welcome.module.css"

function Welcome() {
  return (
    <section className={styles.welcome}>
      <h1>Velkommen</h1>
      <p>Vi er glade for å ha deg her. Ta deg god tid og nyt menyen vår.</p>
    </section>
  )
}

export default Welcome
