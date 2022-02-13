import styles from "../../styles/row.module.css"

export default function Row() {
  return (
    <nav className = {styles.title}>
      <a className={styles.name}>Shiv Gupta</a>
      <nav className = {styles.inrow}>
        <a className={styles.about}>About</a>
        <a className={styles.proj}>Projects</a>
        <a className={styles.contact}>Contacts</a>
      </nav>      
    </nav>
  )
}
