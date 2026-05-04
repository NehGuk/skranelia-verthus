import styles from "./Welcome.module.css"

function Welcome() {
  return (
    <section className={styles.welcome}>
      <h1>Velkommen</h1>
      <p> Her er det bare å lene seg tilbake og velge det du har lyst på.</p>
    </section>
  )
}

export default Welcome
