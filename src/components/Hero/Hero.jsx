import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Ronn
                </h1>
                <p className={styles.description}>
                    I'm a passionate software/game developer with over 7 years of experience in programming and developing! I have used several languages such as C++, C#, and more recently, JavaScript and Python! As you can see from the website, I have also expanded into using React and NextJS, as creating visual products are such a treat to do as well!
                </p>
                <a href="mailto:ronkrisft@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
