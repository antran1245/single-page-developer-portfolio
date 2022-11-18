import Image from 'next/image'
import React from 'react'
import styles from '../styles/AboutMe.module.css'

export default function AboutMe() {
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
    }
    return(
        <section>
            <Image src={require('../assets/images/pattern-rings.svg')} alt="rings" className={styles.rings}/>
            <div className={styles.heading}>
                <p>adamkeyes</p>
                <div className={styles.link}>
                    <Image src={require('../assets/images/icon-frontend-mentor.svg')} alt="frontend"/>
                    <Image src={require('../assets/images/icon-github.svg')} alt="github"/>
                    <Image src={require('../assets/images/icon-linkedin.svg')} alt="linkedin"/>
                    <Image src={require('../assets/images/icon-twitter.svg')} alt="twitter"/>
                </div>
            </div>
            <div className={styles.about}>
                <div className={styles.text}>
                    <h2>Nice to meet you! I&#39;m <span>Adam Keyes</span>.</h2>
                    <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                    <div className={styles.circle}>
                        <a onClick={scrollToContact}>CONTACT ME</a>
                        <Image src={require('../assets/images/pattern-circle.svg')} alt="circle"/>
                    </div>
                </div>
                <div className={styles.profile}></div>
            </div>
        </section>
    )
}