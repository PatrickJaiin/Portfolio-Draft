import styles from "../../styles/footer.module.css"

export default function Row() {
  return (
    <div className={styles.bottom}>
      <nav className={styles.foot}>
      
      <a href="https://www.instagram.com/shiv_gupta1/"><img src="https://cdn.discordapp.com/attachments/941091409509896283/942242694640574524/Vector.png" className={styles.img1}/></a>
      <a href="https://www.linkedin.com/in/shivvguptaa/"><img src="https://cdn.discordapp.com/attachments/941091409509896283/942242624285310976/Vector.png" className={styles.img1}/></a>
      <a href="mailto:shivg03@gmail.com"><img src="https://cdn.discordapp.com/attachments/941091409509896283/942242534699184128/Group.png" className={styles.img1}/></a>
      </nav>
    </div>
  )
}