import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop"
        className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Game/Software Developer</h3>
              <p>I'm a passionate software/game developer with over 7 years of experience in programming and developing! I have used several languages such as C++, C#, and more recently, JavaScript and Python! As you can see from the website, I have also expanded into using React and NextJS, as creating visual products are such a treat to do as well! </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Game/Software Developer</h3>
              <p>I'm a passionate software/game developer with over 7 years of experience in programming and developing! I have used several languages such as C++, C#, and more recently, JavaScript and Python! As you can see from the website, I have also expanded into using React and NextJS, as creating visual products are such a treat to do as well! </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Game/Software Developer</h3>
              <p>I'm a passionate software/game developer with over 7 years of experience in programming and developing! I have used several languages such as C++, C#, and more recently, JavaScript and Python! As you can see from the website, I have also expanded into using React and NextJS, as creating visual products are such a treat to do as well! </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
