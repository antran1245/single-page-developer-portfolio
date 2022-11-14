import Image from 'next/image'
import React from 'react'
import frontend from '../assets/images/icon-frontend-mentor.svg'
import github from '../assets/images/icon-github.svg'
import linkedin from '../assets/images/icon-linkedin.svg'
import twitter from '../assets/images/icon-twitter.svg'
import circle from '../assets/images/pattern-circle.svg'
import rings from '../assets/images/pattern-rings.svg'
import styles from '../styles/AboutMe.module.css'

export default function AboutMe() {
    return(
        <React.Fragment>
        <Image src={rings} alt="rings" className={styles.rings}/>
        <div className={styles.heading}>
            <p>adamkeyes</p>
            <div className={styles.link}>
                <Image src={frontend} alt="frontend"/>
                <Image src={github} alt="github"/>
                <Image src={linkedin} alt="linkedin"/>
                <Image src={twitter} alt="twitter"/>
            </div>
        </div>
        <main className={styles.aboutMe}>
            <div className={styles.text}>
                <h2>Nice to meet you! I'm <span>Adam Keyes</span>.</h2>
                <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                <div className={styles.circle}>
                    <a href='#'>Contact Me</a>
                    <Image src={circle} alt="circle"/>
                </div>
            </div>
            <div className={styles.profile}></div>
        </main>
        </React.Fragment>
    )
}