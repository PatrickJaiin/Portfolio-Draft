import styles from "../../styles/main.module.css"

export default function Main() {
  return (
    <div>
    <section className = {styles.sec1}>
      <a className={styles.yw}>UI/UX Designer</a>
      <a className={styles.txt}>Hello,&nbsp; my name<br/>is Shiv Gupta</a>
      <img src="https://cdn.discordapp.com/attachments/941091409509896283/942206268737716314/shiv1.png" className={styles.img1}/>
      <img src="https://cdn.discordapp.com/attachments/941091409509896283/942185825880391811/yellow-bg.png" className={styles.img2}/>  
      <div className={styles.information}>
       <a className={styles.text}>Short text with details about you, what you do or your professional career. You can add more information on the about page.</a>
      </div>
    <section className={styles.buttons}>
      <button type="button" className={styles.button1}>Projects</button>
      <a href="https://www.linkedin.com/in/shivvguptaa/"><button type="button" className={styles.button2}>LinkedIn</button></a>
    </section>
    </section>
    <section className={styles.projects}>
      <div className={styles.box}>
       <a className={styles.heading}>Projects</a>
       <div className={styles.line}></div>
       <div className={styles.backbox2}>
         <div className={styles.info2}>
            <div className={styles.photo}>
            <a className={styles.pname2}>Project Name</a>
            <p className={styles.para2}>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
            <button type="button" className={styles.button4}>Learn More</button>
            </div>
         </div>
         <img src="https://cdn.discordapp.com/attachments/941091409509896283/942240977341534288/Rectangle_7_1.png" className={styles.img3}/>
       </div>
       <div className={styles.backbox2}>
       <img src="https://cdn.discordapp.com/attachments/941091409509896283/942240977341534288/Rectangle_7_1.png" className={styles.img3}/>
         <div className={styles.info2}>
            <div className={styles.photo}>
            <a className={styles.pname2}>Project Name</a>
            <p className={styles.para2}>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
            <button type="button" className={styles.button4}>Learn More</button>
            </div>
         </div>
       </div>
       <div className={styles.backbox2}>
         <div className={styles.info2}>
            <div className={styles.photo}>
            <a className={styles.pname2}>Project Name</a>
            <p className={styles.para2}>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
            <button type="button" className={styles.button4}>Learn More</button>
            </div>
         </div>
         <img src="https://cdn.discordapp.com/attachments/941091409509896283/942240977341534288/Rectangle_7_1.png" className={styles.img3}/>
       </div>
      </div>
      
    </section>
    </div>
  )
}
